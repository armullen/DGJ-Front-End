function GardenNotes () {
    return (
        <>
            <form>
                <label>Date:</label>
                <input type='date' name='date'  placeholder="Date"/>
                <label>Note:</label>
                <input type='text' name='note'  placeholder="Your garden note goes here"/>
                <button>Submit</button>
            </form>
        </>
    )
}

export default GardenNotes;