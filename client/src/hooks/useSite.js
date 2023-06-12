import useAccount from "./useAccount";
import useGeneralValidation from "./useGeneralValidation";


const useSite = () => {


    const siteFields = {
        NAME: 'name',
        ADDRESS: 'address',
        CITY: 'city',
        STATE: 'state',
        ZIP_CODE: 'zip_code',
        PERSONNEL: 'personnel',
        COUNTRY: 'country',
        INTERNATIONAL: 'international',
        NOTES: 'notes',
    }

    const siteState = {
        name: '',
        address: '',
        city: '',
        state: '',
        zip_code: '',
        country: '',
        notes: '',
        international: false,
        personnel: 1,
    }

    const zip_code_validation = (zip_code) => {

        const pattern = /^[0-9]{5}(?:-[0-9]{4})?$/

        return pattern.test(zip_code)
    }


    const personnel_validation = (personnel) => {

            const pattern = /^[1-9][0-9]{0,5}$/

            return pattern.test(personnel)
    }

    const zip_code_input = (zip_code) => {

        const pattern = /^[0-9]{0,5}(?:-[0-9]{0,4})?$/

        return pattern.test(zip_code)
    }

    const remove_hyphen = (zip_code) => {

        if (zip_code[zip_code.length - 1] === "-") {

            return zip_code.slice(0, zip_code.length - 1)

        }
    }
        const hyphen = (zip_code, payload) => {

            const pattern = /^[0-9]{6}$/
            const other_pattern = /^([0-9]{5})-$/

            let returnValue;


            if(pattern.test(payload) && !other_pattern.test(zip_code)){

                returnValue = payload.substring(0, 5) + "-" + payload.substring(5, 6);

            }else if(pattern.test(payload) && other_pattern.test(zip_code)){


                returnValue =  payload;

            }else if(zip_code_input(payload)){

                    returnValue = payload;

            }else{

                 returnValue = zip_code;
            }

            return returnValue;
        }


        const addressInputValidation = (name) => {

            const pattern = /^[a-zA-Z0-9\s.\-,]{0,150}$/

            return pattern.test(name)
        }

        const siteNameInputValidation = (name) => {

            const pattern = /^[a-zA-Z\s.\-,]{0,75}$/

            return pattern.test(name)
        }
        const noteValidation = (name) => {

            const pattern = /^[a-zA-Z0-9\s.\-?_=+#";:{}()&*%!@$,]{0,750}$/

            return pattern.test(name)
        }

        const siteReducer = (state, action) => {

            const siteObj = JSON.parse(JSON.stringify(state));

            switch (action.type) {

                case siteFields.NAME:

                    if (siteNameInputValidation(action.payload)) {
                        siteObj.name = action.payload;
                    }

                    return siteObj;

                case siteFields.ADDRESS:

                    if (addressInputValidation(action.payload)) {
                        siteObj.address = action.payload;
                    }

                    return siteObj;

                case siteFields.CITY:

                    if (addressInputValidation(action.payload)) {
                        siteObj.city = action.payload;
                    }

                    return siteObj;

                case siteFields.STATE:

                    siteObj.state = action.payload;

                    return siteObj;

                case siteFields.ZIP_CODE:

                    siteObj.zip_code = hyphen(siteObj.zip_code,action.payload);

                    return siteObj;

                case siteFields.NOTES:


                    if (noteValidation(action.payload)) {
                        siteObj.notes = action.payload;
                    }

                    return siteObj;

                case siteFields.PERSONNEL:

                    if (personnel_validation(action.payload)) {
                        siteObj.personnel = ++action.payload;
                    }

                    if(action.payload === ''){
                        siteObj.personnel = 1;
                    }

                    console.log(siteObj)
                    return siteObj;

                case siteFields.COUNTRY:

                    siteObj.country = action.payload;

                    console.log(siteObj)
                    return siteObj;

                case siteFields.INTERNATIONAL:

                    if(action.payload){
                        siteObj.state = '';

                        siteObj.international = !!action.payload;
                    }else{

                        siteObj.country = '';
                        siteObj.international = !!action.payload;
                    }


                    return siteObj;

                default:

                    return siteObj;
            }
        }


        return ({
            siteReducer,
            siteFields,
            siteState,

        })



}
export default useSite;