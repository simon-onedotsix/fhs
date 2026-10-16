export default function PostEvent () {

    const callAPI = async () => {
        try {
            const res = await fetch('/api/hubspot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    properties: {
                        email: 'example@example.com',
                    },
                }),
            });
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <p>post event page</p>
            <button onClick={callAPI}>Make API Call</button>
        </>
    )
}
