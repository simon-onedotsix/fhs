import { useEffect, useMemo, useRef, useState } from 'react';

const DAYS = {
  1: {
    key: '1',
    tabLabel: 'Day 1',
    tabSubtitle: 'Tue · 29 September',
    fullDate: 'Tuesday, 29 September 2026',
    start: '08:00',
    end: '21:00'
  },
  2: {
    key: '2',
    tabLabel: 'Day 2',
    tabSubtitle: 'Wed · 30 September',
    fullDate: 'Wednesday, 30 September 2026',
    start: '08:30',
    end: '21:00'
  },
  3: {
    key: '3',
    tabLabel: 'Day 3',
    tabSubtitle: 'Thu · 1 October',
    fullDate: 'Thursday, 1 October 2026',
    start: '10:00',
    end: '17:30'
  }
};

const sessions = [
  { day: 1, start: '08:00', end: '10:00', stage: 'general', title: 'Registration' },
  { day: 1, start: '09:30', end: '10:00', stage: 'future', title: 'Newcomers Session' },
  { day: 1, start: '10:00', end: '11:00', stage: 'future', title: 'Speed Networking' },
  { day: 1, start: '11:00', end: '13:00', stage: 'summit', title: 'Opening & the Macro Outlook' },
  { day: 1, start: '13:00', end: '14:00', stage: 'food', title: 'Lunch' },
  { day: 1, start: '14:00', end: '15:00', stage: 'summit', title: 'Leadership & Market Intelligence' },
  { day: 1, start: '14:00', end: '16:30', stage: 'future', title: 'Regional Capital Flows' },
  { day: 1, start: '15:00', end: '16:45', stage: 'summit', title: 'Deal Flow & Capital Markets' },
  { day: 1, start: '16:45', end: '17:30', stage: 'summit', title: 'Global Presidents Forum' },
  { day: 1, start: '17:00', end: '18:00', stage: 'future', title: 'Speed Networking' },
  { day: 1, start: '18:00', end: '21:00', stage: 'networking', title: 'Networking Reception' },

  { day: 2, start: '08:30', end: '10:00', stage: 'general', title: 'Registration' },
  { day: 2, start: '09:00', end: '10:00', stage: 'future', title: 'Investor Breakfast' },
  { day: 2, start: '09:30', end: '12:15', stage: 'master', title: 'Owner & Asset Management Fundamentals' },
  { day: 2, start: '10:00', end: '11:50', stage: 'summit', title: 'Confidence, Connectivity & Operating Models' },
  { day: 2, start: '10:30', end: '12:00', stage: 'future', title: 'Startup Den' },
  { day: 2, start: '11:50', end: '12:45', stage: 'summit', title: 'New Destinations & Brand Partnerships' },
  { day: 2, start: '12:15', end: '13:00', stage: 'future', title: 'Profit Without Volume' },
  { day: 2, start: '12:45', end: '13:00', stage: 'summit', title: 'Awards Ceremony' },
  { day: 2, start: '13:00', end: '14:00', stage: 'food', title: 'Lunch' },
  { day: 2, start: '14:00', end: '15:00', stage: 'summit', title: 'Mixed-Use & Culture' },
  { day: 2, start: '14:00', end: '17:30', stage: 'future', title: 'Risk, Technology & Guest Data' },
  { day: 2, start: '14:00', end: '17:15', stage: 'master', title: 'Contracts, Regeneration & Regulation' },
  { day: 2, start: '15:00', end: '16:45', stage: 'summit', title: 'Wellness, Longevity & Regenerative Tourism' },
  { day: 2, start: '16:45', end: '17:15', stage: 'summit', title: 'The $1 Trillion Sports Tourism Economy' },
  { day: 2, start: '18:00', end: '21:00', stage: 'networking', title: 'Reception' },

  { day: 3, start: '10:00', end: '13:00', stage: 'summit', title: 'New Asset Classes & the Living Economy' },
  { day: 3, start: '10:00', end: '11:30', stage: 'future', title: 'Food, Beverage & Restaurant Strategy' },
  { day: 3, start: '12:00', end: '13:00', stage: 'future', title: "Educating Tomorrow's Hospitality Leaders" },
  { day: 3, start: '13:00', end: '14:00', stage: 'food', title: 'Lunch' },
  { day: 3, start: '14:00', end: '17:30', stage: 'summit', title: 'Branded Residences Forum' },
  { day: 3, start: '14:00', end: '16:00', stage: 'future', title: 'Pathways for Future Leaders' }
];

const labels = {
  summit: 'Summit Stage',
  future: 'Future Stage',
  master: 'Master Classes',
  networking: 'Networking',
  general: 'General programme',
  food: 'Hospitality break'
};

const laneLabels = {
  summit: 'Summit Stage',
  future: 'Future Stage',
  master: 'Master Classes'
};

const toMinutes = (value) => {
  const [hours, minutes] = value.split(':').map(Number);
  return hours * 60 + minutes;
};

const formatTime = (value) => {
  const [hours, minutes] = value.split(':').map(Number);
  const hour = hours % 12 || 12;
  return `${hour}:${String(minutes).padStart(2, '0')} ${hours < 12 ? 'AM' : 'PM'}`;
};

const isProgrammeBand = (session) => ['general', 'networking', 'food'].includes(session.stage);
const laneFor = (session) => (isProgrammeBand(session) ? null : session.stage);

const hasMasterClasses = (day) => sessions.some((session) => session.day === day && session.stage === 'master');

const activeLanesForDay = (day) => {
  const lanes = ['summit', 'future'];
  if (hasMasterClasses(day)) lanes.push('master');
  return lanes;
};

function calculateOverlapLayout(laneSessions) {
  const sorted = [...laneSessions].sort(
    (a, b) => toMinutes(a.start) - toMinutes(b.start) || toMinutes(a.end) - toMinutes(b.end)
  );
  const result = new Map();
  let cluster = [];
  let clusterEnd = -1;

  const finishCluster = () => {
    if (!cluster.length) return;
    const columnEnds = [];
    let columnCount = 1;

    cluster.forEach((session) => {
      const start = toMinutes(session.start);
      let column = columnEnds.findIndex((end) => end <= start);
      if (column === -1) column = columnEnds.length;
      columnEnds[column] = toMinutes(session.end);
      columnCount = Math.max(columnCount, columnEnds.length);
      result.set(session, { column, columnCount: 1 });
    });

    cluster.forEach((session) => {
      result.get(session).columnCount = columnCount;
    });

    cluster = [];
    clusterEnd = -1;
  };

  sorted.forEach((session) => {
    const start = toMinutes(session.start);
    const end = toMinutes(session.end);
    if (cluster.length && start >= clusterEnd) finishCluster();
    cluster.push(session);
    clusterEnd = Math.max(clusterEnd, end);
  });

  finishCluster();
  return result;
}

export default function FhsWorld2026Schedule() {

  const [selectedDay, setSelectedDay] = useState(1)
  const [bodyWidth, setBodyWidth] = useState(780)
  const timelineBodyRef = useRef(null)

  useEffect(() => {
    const updateBodyWidth = () => {
      if (timelineBodyRef.current) {
        setBodyWidth(timelineBodyRef.current.clientWidth || 780)
      }
    }

    updateBodyWidth()
    window.addEventListener('resize', updateBodyWidth)
    return () => window.removeEventListener('resize', updateBodyWidth)
  }, [])

  const day = useMemo(() => DAYS[selectedDay], [selectedDay])
  const lanes = useMemo(() => activeLanesForDay(selectedDay), [selectedDay])
  const dailySessions = useMemo(() => sessions.filter((session) => session.day === selectedDay), [selectedDay])
  const timelineHeight = Math.max(560, (toMinutes(day.end) - toMinutes(day.start)) * 1.3)
  const timeColumn = 86
  const laneGap = 12
  const laneWidth = Math.max(0, (bodyWidth - timeColumn - laneGap * lanes.length) / lanes.length)

  const overlapLayouts = useMemo(() => {
    const layouts = new Map()
    lanes.forEach((lane) => {
      const laneSessions = dailySessions.filter((session) => laneFor(session) === lane)
      layouts.set(lane, calculateOverlapLayout(laneSessions));
    });
    return layouts;
  }, [dailySessions, lanes]);

  const orderedSessions = useMemo(
    () => [
      ...dailySessions.filter(isProgrammeBand),
      ...dailySessions.filter((session) => !isProgrammeBand(session))
    ],
    [dailySessions]
  )

  return (
    <section className="fhs-schedule" aria-label="FHS World 2026 schedule at a glance">
     
      <style jsx global>{`
        .fhs-schedule {
          --background: var(--primary);
          --background-general: hsl(from var(--primary) h s calc(l + 6) / 1);
          --background-networking: hsl(from var(--primary) h s calc(l + 20) / 1);

          --ink: #25112f;
          --ink-2: #fffdff;
          --paper: #f8f5fa;
          --white: #ffffff;
          --purple: #2a0d3c;
          --purple-2: #4b1764;
          --red: #e53d51;
          --red-dark: #bd263d;
          --blue: #8fd7ef;
          --yellow: #f3cb65;
          --pink: #cf7bb8;
          --line: rgba(255, 255, 255, 0.1);
          --divider-line: rgba(255, 255, 255, 0.0);
          --muted: #b9a2c3;

          --font-size: 1rem;
          --font-size-day-number: 1.5rem;
          --font-size-day-date: .8rem;
          --font-size-key: .75rem;
          --font-size-event-title: 1rem;

          --main-radius: 1.25rem;
          --card-radius: calc(var(--main-radius) * 0.5);
          --shadow: none;
          
          width: min(1180px, 100%);
          margin-inline: auto;
          color: var(--ink);
          font-family: inherit;
          line-height: 1.45;
        }

        .fhs-schedule,
        .fhs-schedule * { box-sizing: border-box; }

        .fhs-schedule button,
        .fhs-schedule input { font: inherit; }

        .fhs-schedule button { cursor: pointer; }

        .fhs-schedule button:focus-visible {
          outline: 3px solid #2788ad;
          outline-offset: 3px;
        }

        .fhs-schedule__shell {
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: var(--main-radius);
          background: var(--background);
          box-shadow: none;
        }

        .fhs-schedule__controls {
          padding: var(--space-xxs);
          border-bottom: 1px solid var(--line);
          background: var(--background);
        }

        .fhs-schedule__days {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          padding: 6px;
          border-radius: 16px;
          background: rgba(42, 13, 60, .07);
        }

        .fhs-schedule__day {
          border: 0;
          border-radius: var(--card-radius);
          padding: 13px 12px;
          color: var(--ink-2);
          background: transparent;
          text-align: left;
          transition: background .2s ease, color .2s ease, box-shadow .2s ease;
        }

        .fhs-schedule__day strong {
          display: block;
          font-size: var(--font-size-day-number);
        }

        .fhs-schedule__day span {
          display: block;
          margin-top: 2px;
          font-size: var(--font-size-day-date);
          opacity: .7;
        }

        .fhs-schedule__day[aria-selected="true"] {
          color: var(--white);
          background: var(--purple);
          box-shadow: 0 8px 20px rgba(42, 13, 60, .18);
        }

        .fhs-schedule__viewport { overflow-x: auto; }

        .fhs-schedule__timeline {
          position: relative;
          min-width: 780px;
          padding: 0 20px 30px;
          
          --time-col: 86px;
          --lane-gap: 12px;
          --lane-count: 3;
        }

        .fhs-schedule__headings {
          position: sticky;
          top: 0;
          z-index: 12;
          display: grid;
          grid-template-columns: var(--time-col) repeat(var(--lane-count), minmax(190px, 1fr));
          gap: var(--lane-gap);
          padding: 10px 0;
          background: transparent;
        }

        .fhs-schedule__heading {
          padding: 11px 13px;
          border-radius: var(--card-radius);
          color: var(--white);
          background: var(--purple);
          font-size: var(--font-size-key);
          font-weight: 600;
          letter-spacing: .05em;
          text-transform: uppercase;
        }

        .fhs-schedule__heading--time {
          padding-left: 0;
          color: var(--muted);
          background: transparent;
        }

        .fhs-schedule__heading--summit {
          background: var(--red);
        }

        .fhs-schedule__heading--future {
          color: var(--purple);
          background: var(--blue);
        }

        .fhs-schedule__heading--master {
          color: var(--purple);
          background: var(--yellow);
        }

        .fhs-schedule__body {
          position: relative;
          margin-top: 2px;
        }

        .fhs-schedule__hour-line {
          position: absolute;
          left: 0;
          right: 0;
          border-top: 1px solid var(--line);
          pointer-events: none;
        }

        .fhs-schedule__hour-line::before {
          content: attr(data-time);
          position: absolute;
          left: 0;
          top: -10px;
          width: 70px;
          color: var(--muted);
          background: var(--background);
          font-size: 11px;
          font-weight: 600;
        }

        .fhs-schedule__hour-line--half {
          border-top-style: dashed;
          opacity: .55;
        }

        .fhs-schedule__hour-line--half::before { content: ''; }

        .fhs-schedule__divider {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: var(--divider-line);
          pointer-events: none;
        }

        .fhs-schedule__event {
          position: absolute;
          z-index: 3;
          min-width: 0;
          border: 0;
          padding: 8px 9px;
          overflow: hidden;
          border-radius: var(--card-radius);
          color: var(--white);
          background: var(--purple);
          box-shadow: none;
          text-align: left;
          transition: opacity .18s ease;
        }

        .fhs-schedule__event:hover {
          z-index: 3;
        }

        .fhs-schedule__event--band {
          z-index: 1;
        }

        .fhs-schedule__event--band:hover {
          z-index: 1;
        }

        .fhs-schedule__event-time {
          display: block;
          margin-bottom: 3px;
          font-size: calc( var(--font-size) * 0.8 );
          font-weight: 500;
          opacity: .76;
          white-space: nowrap;
        }

        .fhs-schedule__event-title {
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          font-size: var(--font-size-event-title);
          line-height: 1.18;
          font-weight: 600;
        }

        .fhs-schedule__event--compact {
          padding: 2px 7px;
        }

        .fhs-schedule__event--compact .fhs-schedule__event-time {
          display: none;
        }

        .fhs-schedule__event--compact .fhs-schedule__event-title {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: calc( var(--font-size) * 0.75 );
          line-height: 1.35;
        }

        .fhs-schedule__event--summit {
          background: var(--red);
        }

        .fhs-schedule__event--future {
          color: var(--purple);
          background: var(--blue);
        }

        .fhs-schedule__event--master {
          color: var(--purple);
          background: var(--yellow);
        }

        .fhs-schedule__event--general {
          color: var(--bg);
          background: var(--background-general);
          box-shadow: none;
        }

        .fhs-schedule__event--networking {
          background: var(--background-networking);
        }

        .fhs-schedule__event--food {
          color: var(--bg);
          background: var(--background-general);
          box-shadow: none;
        }

        .fhs-schedule__mobile { display: none; padding: 12px 16px 24px; }
        .fhs-schedule__mobile-group { margin-top: 22px; }

        .fhs-schedule__mobile-time {
          margin: 0 0 9px;
          color: var(--muted);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: .08em;
        }

        .fhs-schedule__mobile-card {
          width: 100%;
          margin-bottom: 9px;
          border: 1px solid var(--line);
          padding: 15px;
          border-radius: 14px;
          color: var(--ink);
          background: var(--white);
          text-align: left;
          box-shadow: none;
        }

        .fhs-schedule__mobile-stage {
          display: inline-flex;
          margin-bottom: 8px;
          padding: 5px 8px;
          border-radius: 999px;
          color: var(--white);
          background: var(--purple);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: .06em;
          text-transform: uppercase;
        }

        .fhs-schedule__mobile-card--future .fhs-schedule__mobile-stage {
          color: var(--purple);
          background: var(--blue);
        }

        .fhs-schedule__mobile-card--summit .fhs-schedule__mobile-stage { background: var(--red); }

        .fhs-schedule__mobile-card--master .fhs-schedule__mobile-stage {
          color: var(--purple);
          background: var(--yellow);
        }

        .fhs-schedule__mobile-card--general .fhs-schedule__mobile-stage {
          color: var(--purple);
          background: #eee8f2;
        }

        .fhs-schedule__mobile-card--networking .fhs-schedule__mobile-stage { background: var(--purple-2); }

        .fhs-schedule__mobile-card--food .fhs-schedule__mobile-stage {
          color: var(--purple);
          background: #f5e9dc;
        }

        .fhs-schedule__mobile-card strong {
          display: block;
          font-size: 16px;
          line-height: 1.25;
        }

        .fhs-schedule__mobile-card small {
          display: block;
          margin-top: 6px;
          color: var(--muted);
        }

        @media (max-width: 780px) {
          .fhs-schedule__days { grid-template-columns: 1fr; }

          .fhs-schedule__day {
            display: grid;
            grid-template-columns: 76px 1fr;
            align-items: center;
            gap: 6px;
          }

          .fhs-schedule__day span { margin: 0; }
          .fhs-schedule__viewport { display: none; }
          .fhs-schedule__mobile { display: block; }
        }

        @media print {
          .fhs-schedule__controls { display: none !important; }

          .fhs-schedule { width: 100%; }
          .fhs-schedule__shell { box-shadow: none; border: 0; }
          .fhs-schedule__viewport { overflow: visible; }
          .fhs-schedule__timeline { min-width: 0 !important; }
          .fhs-schedule__event {
            box-shadow: none;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>

      <div className="fhs-schedule__shell">
        
        <div className="fhs-schedule__controls">
          <div className="fhs-schedule__days" role="tablist" aria-label="Select event day">
            {Object.values(DAYS).map((dayOption) => (
              <button
                key={dayOption.key}
                className="fhs-schedule__day"
                role="tab"
                aria-selected={selectedDay === Number(dayOption.key)}
                type="button"
                onClick={() => setSelectedDay(Number(dayOption.key))}
              >
                <strong>{dayOption.tabLabel}</strong>
                <span>{dayOption.tabSubtitle}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="fhs-schedule__viewport">
          <div className="fhs-schedule__timeline" style={{ '--lane-count': lanes.length }}>
            <div className="fhs-schedule__headings" aria-hidden="true">
              <div className="fhs-schedule__heading fhs-schedule__heading--time">Time</div>
              {lanes.map((lane) => (
                <div key={lane} className={`fhs-schedule__heading fhs-schedule__heading--${lane}`}>
                  {laneLabels[lane]}
                </div>
              ))}
            </div>

            <div className="fhs-schedule__body" ref={timelineBodyRef} style={{ height: `${timelineHeight}px` }}>
              {Array.from({ length: Math.floor((toMinutes(day.end) - toMinutes(day.start)) / 30) + 1 }, (_, index) => {
                const minute = Math.ceil(toMinutes(day.start) / 30) * 30 + index * 30;
                if (minute > toMinutes(day.end)) return null;
                const hours = String(Math.floor(minute / 60)).padStart(2, '0');
                const mins = String(minute % 60).padStart(2, '0');
                const label = formatTime(`${hours}:${mins}`).replace(':00', '');
                return (
                  <div
                    key={`${minute}`}
                    className={`fhs-schedule__hour-line${minute % 60 ? ' fhs-schedule__hour-line--half' : ''}`}
                    data-time={label}
                    style={{ top: `${(minute - toMinutes(day.start)) * 1.3}px` }}
                  />
                );
              })}

              {lanes.slice(1).map((_, index) => {
                const dividerLeft = timeColumn + laneGap + (index + 1) * (laneWidth + laneGap) - laneGap / 2;
                return <div key={`divider-${index}`} className="fhs-schedule__divider" style={{ left: `${dividerLeft}px` }} />;
              })}

              {orderedSessions.map((session) => {
                const sessionDuration = toMinutes(session.end) - toMinutes(session.start);
                const top = (toMinutes(session.start) - toMinutes(day.start)) * 1.3 + 2;
                const heightPx = Math.max(16, sessionDuration * 1.3 - 4);

                let style = {
                  top: `${top}px`,
                  height: `${heightPx}px`
                };

                if (isProgrammeBand(session)) {
                  style = {
                    ...style,
                    left: `${timeColumn + laneGap}px`,
                    width: `${bodyWidth - timeColumn - laneGap}px`
                  };
                } else {
                  const lane = laneFor(session);
                  const laneIndex = lanes.indexOf(lane);
                  if (laneIndex === -1) return null;
                  const stageLeft = timeColumn + laneGap + laneIndex * (laneWidth + laneGap);
                  const overlap = overlapLayouts.get(lane)?.get(session) || { column: 0, columnCount: 1 };
                  const overlapGap = overlap.columnCount > 1 ? 4 : 0;
                  const itemWidth = (laneWidth - overlapGap * (overlap.columnCount - 1)) / overlap.columnCount;
                  const itemLeft = stageLeft + overlap.column * (itemWidth + overlapGap);
                  style = {
                    ...style,
                    left: `${itemLeft}px`,
                    width: `${itemWidth}px`
                  };
                }

                return (
                  <div
                    key={`${session.day}-${session.start}-${session.end}-${session.title}`}
                    className={`fhs-schedule__event ${sessionDuration <= 30 ? 'fhs-schedule__event--compact' : ''} fhs-schedule__event--${session.stage}`}
                    style={style}
                    aria-label={`${session.title}, ${formatTime(session.start)} to ${formatTime(session.end)}, ${labels[session.stage]}`}
                  >
                    <span className="fhs-schedule__event-time">{`${formatTime(session.start)}–${formatTime(session.end)}`}</span>
                    <span className="fhs-schedule__event-title">{session.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="fhs-schedule__mobile" role="tabpanel" aria-live="polite">
          {Object.entries(
            dailySessions.reduce((groups, session) => {
              (groups[session.start] ||= []).push(session);
              return groups;
            }, {})
          ).map(([time, group]) => (
            <section key={time} className="fhs-schedule__mobile-group">
              <h3 className="fhs-schedule__mobile-time">{formatTime(time)}</h3>
              {group.map((session) => (
                <button
                  key={`${session.start}-${session.end}-${session.title}`}
                  type="button"
                  className={`fhs-schedule__mobile-card fhs-schedule__mobile-card--${session.stage}`}
                >
                  <span className="fhs-schedule__mobile-stage">{labels[session.stage]}</span>
                  <strong>{session.title}</strong>
                  <small>{`${formatTime(session.start)} – ${formatTime(session.end)}`}</small>
                </button>
              ))}
            </section>
          ))}
        </div>
      </div>
      
    </section>
  );
}
