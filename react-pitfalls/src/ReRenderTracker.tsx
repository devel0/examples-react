export const ReRenderTracker = () => {
    return <div style={{ border: '1px solid', padding: '1rem', display: 'flex', flexDirection: 'column' }}>
        <span>ReRenderTracker</span>
        <span>{String(new Date().valueOf())}</span>
    </div>
}