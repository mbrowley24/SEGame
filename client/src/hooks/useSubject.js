


const useSubject = () => {

    const whiteSpaceCheck = (string) => {

        const pattern = /\s\s/;

        return pattern.test(string);
    }

    const subjectInputRegex = (text) => {

        if(whiteSpaceCheck(text)){

                return false;
        }

        const pattern = /^([A-Za-z0-9\s\-'%^$#@+()!]){0,50}$/;

        return pattern.test(text);
    }

    const subjectValidation = (text) => {

        const test = text.trim();
        if(test.length === 0){
            return false;
        }

        if(whiteSpaceCheck(text)){

                return false;
        }

        const pattern = /^([A-Za-z0-9\s\-'%^$#@+()!]){2,50}$/;

        return pattern.test(text);
    }

    return({
            subjectInputRegex,
            subjectValidation
        })
}


export default useSubject;