export const TrackRender = () => {
    return <div style={{ border: '1px solid', padding: '1rem' }}>
        <p>
            This datetime updates if page re-rendered
        </p>

        {`${new Date()}`}
    </div>
}