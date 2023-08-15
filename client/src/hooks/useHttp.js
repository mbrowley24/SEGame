import {useState, useCallback} from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux";


const useHttp = () =>{
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const myData = useSelector(state => state.playerData);

    const getHttpRequest = useCallback(async(requestConfig, applyData)=>{
        // console.log(requestConfig);
        //  console.log(token)
        try{
            setIsLoading(true);
            const httpResponse = await  axios.get(`http://localhost:8080/api/v1/${requestConfig.url}`, {
                signal: requestConfig.signal,
                withCredentials: true,
            })

            //`https://theaveragese.com/api/v1/${requestConfig.url}`

            // console.log(requestConfig)
            if(httpResponse.status === 200){
                applyData(httpResponse);
                setIsLoading(false)
            }


            
        }catch(error){
              console.log(error)
            if(error && error.response){

                if(error.response.status === 403){

                    navigate('/')
                }else{

                    applyData(error);
                }

            }
        }

    }, [ navigate])

    const postHttpRequest = useCallback(async(requestConfig, applyData)=>{
        console.log(requestConfig)
        try{
            setIsLoading(true);
            const httpResponse = await  axios.post(`http://localhost:8080/api/v1/${requestConfig.url}`, requestConfig.data , {
                withCredentials: true,

            })


            console.log(requestConfig)
            if(httpResponse.status === 200){
                applyData(httpResponse);
                setIsLoading(false)
            }



        }catch(error){
            console.log(error)
            if(error && error.response){

                if(error.response.status === 403){

                    navigate('/')
                }else{

                    applyData(error);
                }

            }
        }

    },[navigate])
    const putHttpRequest = useCallback(async(requestConfig, applyData)=>{

        try{
            setIsLoading(true);
            const httpResponse = await  axios.put(`http://localhost:8080/api/v1/${requestConfig.url}`, requestConfig.data , {
                withCredentials: true,

            })


            // console.log(requestConfig)
            if(httpResponse.status === 200){
                applyData(httpResponse);
                setIsLoading(false)
            }

        }catch(error){
            console.log(error)
            if(error && error.response){

                if(error.response.status === 403){

                    navigate('/')
                }else{

                    applyData(error);
                }

            }
        }

    },[navigate])

    return(
        {
            getHttpRequest,
            postHttpRequest,
            putHttpRequest,
            isLoading
        }
    )

}


export default useHttp;
