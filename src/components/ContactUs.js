import React from "react";
class ContactUs extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            listUser:
            {
                login: "xyz",
                id: 2,
                url: "https://api.github.com/users/mojombo"
            }
        };
        console.log(this.state.listUser);
        console.log("Constructor being called");
    }




    async componentDidMount() {
        const response = await fetch('https://api.github.com/users');
        const data = await response.json();
        this.setState({ listUser: data[2] });


    }

    componentWillUnmount() {
        console.log("This has been called");
    }



    render() {
        console.log("render function being called");
        const { login, id, url } = this.state.listUser;
        return <div>
            <h1>{login}</h1>
            <p>{id}</p>
            <p>{url}</p>


        </div>

    }
}

export default ContactUs;