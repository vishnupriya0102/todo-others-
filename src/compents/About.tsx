interface AboutPorps{
    title: string;
    created_by: string;
    created_at: string;
}
export default function About({ title='', created_by='', created_at=''}: AboutPorps) {
    return (
        <div>
            <h1>{title}</h1>
            <p>created_by:{created_by}</p>
            <p>created_at:{created_at}</p>
        </div>
    );
}