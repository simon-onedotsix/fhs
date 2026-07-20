import { Pop } from '../../fuselage/animation/animation'

import CSS from './agenda-session.module.css'

export const AgendaSessionLite = ({ beginsAt, endsAt, children }) => {
    return (
        <Pop>
            <div className={CSS.layoutLite}>
                <aside>
                    <p>{beginsAt} {endsAt && `– ${endsAt}`}</p>
                </aside>

                <main>
                    {children}
                </main>
            </div>
        </Pop>
    )
}