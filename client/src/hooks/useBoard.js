

const useBoard = () => {
    const namePattern = /^[a-zA-Z\s.\-?";:{}()&*%!@$,]{2,25}$/


    const filterCategoryKeys= (category) =>{

        function categoryKeyFilter(key) {

            if(key !== 'name') {

                if(key !== 'created_by') {

                    if(key !== 'id') {

                        return key;
                    }
                }
            }

            return false
        }

        return Object.keys(category).filter((categoryKeyFilter));
    }

    const questionsCheck = (category) => {

        return category.question !== "";
    }

    const answerCheck = (category) => {

        return category.answer !== "";

    }

    const categoryAnswersCheck = (categoryName, answer, board) => {
        const {category1, category2, category3, category4, category5, category6} = board;

        const categoryKeys = filterCategoryKeys(category1);

        if(category1['name'] !== categoryName){

            for(let i = 0; i < categoryKeys.length; i++) {

                if(categoryKeys[i] === "name") {
                    continue;
                }

                if(category1[categoryKeys[i]].answer === answer) {
                    return false;
                }

            }
        }

        if(category2['name'] !== categoryName){


            for(let i = 0; i < categoryKeys.length; i++) {

                if(categoryKeys[i] === "name") {
                    continue;
                }

                if(category2[categoryKeys[i]].answer === answer) {
                    return false;
                }

            }
        }

        if(category3['name'] !== categoryName){

            for(let i = 0; i < categoryKeys.length; i++) {

                if(categoryKeys[i] === "name") {
                    continue;
                }

                if(category3[categoryKeys[i]].answer === answer) {
                    return false;
                }

            }
        }

        if(category4['name'] !== categoryName){

            for(let i = 0; i < categoryKeys.length; i++) {

                if(categoryKeys[i] === "name") {
                    continue;
                }

                if(category4[categoryKeys[i]].answer === answer) {
                    return false;
                }

            }
        }

        if(category5['name'] !== categoryName){

            for(let i = 0; i < categoryKeys.length; i++) {

                if(categoryKeys[i] === "name") {
                    continue;
                }

                if(category5[categoryKeys[i]].answer === answer) {
                    return false;
                }

            }
        }

        if(category6['name'] !== categoryName){

            for(let i = 0; i < categoryKeys.length; i++) {

                if(categoryKeys[i] === "name") {
                    continue;
                }

                if(category6[categoryKeys[i]].answer === answer) {
                    return false;
                }

            }
        }



        return true;
    }

    const categoryQuestionsCheck = (categoryName, question, board) => {

        const {category1, category2, category3, category4, category5, category6} = board;

        const categoryKeys = filterCategoryKeys(category1);



        if(category1['name'] !== categoryName){

            for(let i = 0; i < categoryKeys.length; i++) {

                if(categoryKeys[i] === "name") {
                    continue;
                }
                if(category1[categoryKeys[i]].question === question) {

                    console.log(" cat1 question already exists");
                    return false;
                }

            }
        }

        if(category2['name'] !== categoryName){

            for(let i = 0; i < categoryKeys.length; i++) {

                if(categoryKeys[i] === "name") {
                    continue;
                }

                if(category2[categoryKeys[i]].question === question) {
                    console.log(category2[categoryKeys[i]].question)
                    console.log(question)
                    console.log(" cat2 question already exists");
                    return false;
                }

            }
        }

        if(category3['name'] !== categoryName){

            for(let i = 0; i < categoryKeys.length; i++) {

                if(categoryKeys[i] === "name") {
                    continue;
                }



                if(category3[categoryKeys[i]].question === question) {
                    console.log(" cat3 question already exists");
                    return false;
                }

            }
        }

        if(category4['name'] !== categoryName){

                for(let i = 0; i < categoryKeys.length; i++) {

                    if(categoryKeys[i] === "name") {
                        continue;
                    }

                    if(category4[categoryKeys[i]].question === question) {
                        console.log(" cat4 question already exists");
                        return false;
                    }

                }
        }

        if(category5['name'] !== categoryName){

            for(let i = 0; i < categoryKeys.length; i++) {

                if(categoryKeys[i] === "name") {
                    continue;
                }

                if(category5[categoryKeys[i]].question === question) {
                    console.log(" cat5 question already exists");
                    return false;
                }

            }
        }

        if(category6['name'] !== categoryName){

            for(let i = 0; i < categoryKeys.length; i++) {

                if(categoryKeys[i] === "name") {
                    continue;
                }

                if(category6[categoryKeys[i]].question === question) {
                    console.log(" cat6 question already exists");
                    return false;
                }

            }
        }


        return true;
    }

    const checkCategoryName = (name, board) => {

        const {category1, category2, category3, category4, category5, category6} = board;

        const categoryName = {};
        categoryName[name] = 0;

        if(category1['name'] !== ""){

            if(categoryName.hasOwnProperty(category1['name'])){

                categoryName[name] = categoryName[name] + 1;

            }
        }

        if(category2['name'] !== ""){

            if(categoryName.hasOwnProperty(category2['name'])){

                categoryName[name] = categoryName[name] + 1;

            }
        }


        if(category3['name'] !== ""){
            if(categoryName.hasOwnProperty(category3['name'])){

                categoryName[name] = categoryName[name] + 1;

            }
        }



        if(category4['name'] !== ""){
            if(categoryName.hasOwnProperty(category4['name'])){

                categoryName[name] = categoryName[name] + 1;

            }
        }



        if(category5['name'] !== ""){
            if(categoryName.hasOwnProperty(category5['name'])){

                categoryName[name] = categoryName[name] + 1;

            }
        }

        if (category6['name'] !== "") {

            if (categoryName.hasOwnProperty(category6['name'])) {

                categoryName[name] = categoryName[name] + 1;

            }
        }

        return categoryName[name]  < 2;

    }

    const checkNode = (name, question, board) =>{
        const error = 'd-flex height100  m-auto border justify-content-center overflow-auto p-1 bg-danger';
        const success = 'd-flex height100  m-auto border justify-content-center overflow-auto p-1 bg-success';
        const empty = 'd-flex height100  m-auto border justify-content-center overflow-auto p-1 background-jeopardy';

        if(!question){
            return empty;
        }

        if(!categoryQuestionsCheck(name, question, board)) {
            return error;
        }

        if(!checkCategoryName(name, board)) {
            return error;
        }

        return success


    }



    const categoryValidation = (board) => {

        const {category1, category2, category3, category4, category5, category6} = board;

        const categoryKeys = filterCategoryKeys(category1);



        for(let i= 0; i < categoryKeys.length; i++) {

            if(!questionsCheck(category1[categoryKeys[i]])) {
                return false;
            }

            if(!answerCheck(category1[categoryKeys[i]])) {
                return false;
            }

            if(!questionsCheck(category2[categoryKeys[i]])) {
                console.log("category2")
                console.log(category2[categoryKeys[i]]);
                return false;

            }
            if(!answerCheck(category2[categoryKeys[i]])) {
                return false;
            }

            if(!questionsCheck(category3[categoryKeys[i]])) {
                return false;

            }

            if(!answerCheck(category3[categoryKeys[i]])) {
                return false;
            }


            if(!answerCheck(category4[categoryKeys[i]])) {
                return false;
            }

            if(!questionsCheck(category4[categoryKeys[i]])) {
                return false;

            }

            if(!questionsCheck(category5[categoryKeys[i]])) {
                return false;

            }

            if(!answerCheck(category5[categoryKeys[i]])) {
                return false;
            }



            if(!questionsCheck(category6[categoryKeys[i]])) {
                return false;

            }


            if(!answerCheck(category6[categoryKeys[i]])) {
                return false;
            }


            const checkCategory1 = checkCategoryName(category1['name'], board);

            if(!checkCategory1) {
                console.log("checkCategory");
                return false;
            }


            const checkCategory2 = checkCategoryName(category2['name'], board);

            if(!checkCategory2) {
                console.log("checkCategory");
                return false;
            }

            const checkCategory3 = checkCategoryName(category3['name'], board);

            if(!checkCategory3) {
                console.log("checkCategory");
                return false;
            }

            const checkCategory4 = checkCategoryName(category4['name'], board);

            if(!checkCategory4) {
                console.log("checkCategory");
                return false;
            }

            const checkCategory5 = checkCategoryName(category5['name'], board);
            if(!checkCategory5) {
                console.log("checkCategory");
                return false;
            }

            const checkCategory6 = checkCategoryName(category6['name'], board);

            if(!checkCategory6) {
                console.log("checkCategory");
                return false;
            }


            const cat_1_questions_check =
                categoryQuestionsCheck(category1['name'], category1[categoryKeys[i]].question, board);

            if(!cat_1_questions_check) {
                console.log("cat_1_questions_check");
                return false;
            }

            const cat_1_answers_check =
                categoryAnswersCheck(category1['name'], category1[categoryKeys[i]].answer, board);

            if(!cat_1_answers_check) {
                console.log("cat_1_answer_check");
                return false;
            }



            const cat_2_questions_check =
                categoryQuestionsCheck(category2['name'], category2[categoryKeys[i]].question, board);

            if(!cat_2_questions_check) {
                console.log("cat_2_questions_check");
                return false;
            }

            const cat_2_answers_check =
                categoryAnswersCheck(category2['name'], category2[categoryKeys[i]].answer, board);

            if(!cat_2_answers_check) {
                console.log("cat_2_answer_check");
                return false;
            }


            const cat_3_questions_check =
                categoryQuestionsCheck(category3['name'], category3[categoryKeys[i]].question, board);

            if(!cat_3_questions_check) {
                console.log("cat_3_questions_check");
                return false;
            }

            const cat_3_answers_check =
                categoryAnswersCheck(category3['name'], category3[categoryKeys[i]].answer, board);

            if(!cat_3_answers_check) {
                console.log("cat_3_answer_check");
                return false;
            }


            const cat_4_questions_check =
                categoryQuestionsCheck(category4['name'], category4[categoryKeys[i]].question, board);

            if(!cat_4_questions_check) {
                console.log("cat_4_questions_check");
                return false;
            }

            const cat_4_answers_check =
                categoryAnswersCheck(category4['name'], category4[categoryKeys[i]].answer, board);

            if(!cat_4_answers_check) {
                console.log("cat_4_answer_check");
                return false;
            }




            const cat_5_questions_check =
                categoryQuestionsCheck(category5['name'], category5[categoryKeys[i]].question, board);

            if(!cat_5_questions_check) {
                console.log("cat_5_questions_check");
                return false;
            }

            const cat_5_answers_check =
                categoryAnswersCheck(category5['name'], category5[categoryKeys[i]].answer, board);

            if(!cat_5_answers_check) {
                console.log("cat_5_answer_check");
                return false;
            }



            const cat_6_questions_check =
                categoryQuestionsCheck(category6['name'], category6[categoryKeys[i]].question, board);

            if(!cat_6_questions_check) {
                console.log("cat_6_questions_check");
                return false;
            }

            const cat_6_answers_check =
                categoryAnswersCheck(category6['name'], category6[categoryKeys[i]].answer, board);

            if(!cat_6_answers_check) {
                console.log("cat_6_answer_check");
                return false;
            }

        }

        return true;

    }

    const validateBoard = (board) => {

        if(!namePattern.test(board.name)) {
            return false;
        }

        return categoryValidation(board);
    }

    return({
        namePattern,
            checkNode,
            validateBoard,
            categoryAnswersCheck,
            categoryQuestionsCheck,
        }
    )
};

export default useBoard;