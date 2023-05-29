function SignUp () {
    return(
        <form>
            <label>Name</label>
            <input type='text' name="name" placeholder="name"></input>
            <label>E-Mail</label>
            <input type="text" name="name" placeholder="name"></input>
            <label>Garden Name</label>
            <input type='text' name="gardenName" placeholder="name your garden"></input>
            <label>Zone</label>
            <input type="text" name="zone" placeholder="5a"></input>
        </form>
    )
}

export default SignUp;