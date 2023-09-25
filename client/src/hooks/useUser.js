import useGeneralValidation from "./useGeneralValidation";




const useUser = () =>{
    const {emailInputValidation, usernameInputValidation,
            passwordInputValidation, nameInputValidation,
            emailValidation, nameValidation, usernameValidation, 
            } = useGeneralValidation()


    const userRegistration={
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        confirm_password: '',
    }

    const USER_FIELDS={
        USERNAME: 'username',
        FIRST_NAME: 'first_name',
        LAST_NAME: 'last_name',
        EMAIL: "email",
        PASSWORD : 'password',
        CONFIRM_PASSWORD: 'confirm_password',
        RESET : 'reset',

    }





    const userReducer = (userState, action)=>{

        let userObj = JSON.parse(JSON.stringify(userState));

        switch (action.type){

            case USER_FIELDS.FIRST_NAME:

                if (nameInputValidation(action.payload)){

                    userObj.first_name = action.payload;
                }

                return userObj

            case USER_FIELDS.LAST_NAME:

                if(nameInputValidation(action.payload)){

                    userObj.last_name = action.payload;
                }


                return userObj;

            case USER_FIELDS.EMAIL:

                if(emailInputValidation(action.payload)){

                    userObj.email = action.payload;

                }
                return userObj

            case USER_FIELDS.PASSWORD:


                if(passwordInputValidation(action.payload)){

                    userObj.password = action.payload
                }

                return userObj;


            case USER_FIELDS.CONFIRM_PASSWORD:

                if(passwordInputValidation(action.payload)){

                    userObj.tempFields.confirm_password = action.payload;
                }


                return userObj

            case USER_FIELDS.NUMBER_NUMBER:

                if(passwordInputValidation(action.payload)){

                    userObj.tempFields.phone_number.number = action.payload;
                }

                return userObj

            case USER_FIELDS.USERNAME:

                if(usernameInputValidation(action.payload)){

                    userObj.username = action.payload;
                }

                return userObj;
            
            case USER_FIELDS.RESET:

                userObj = {...userRegistration}
            

            default:
                return userObj
        }

    }


    const userValidation = (user) =>{
        let isValid = true;

        console.log("userValidation", user);

        if(!nameValidation(user.first_name)){

            isValid = false;
        }

        if(!nameValidation(user.last_name)){
            isValid = false;
        }

        if(!emailValidation(user.email)){
            isValid = false;
        }

        if(!usernameValidation(user.username)){
            isValid = false;
        }


        return isValid;
    };

    return({
        USER_FIELDS,
        userReducer,
        userRegistration,
        userValidation,
    })
}

export default useUser;

