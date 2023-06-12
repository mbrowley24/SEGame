




const useDiscovery = () => {

    const att = (str) =>{

        let returnValue = str;

        if(str === "at&t"){

            returnValue = returnValue.toUpperCase()
        }


        return returnValue;
    }

    const DISCOVERY_FIELDS={
        NETWORK_TOPOLOGY: "network_topology",
        NUM_OF_IT_STAFF: "num_of_it_staff",
        IS_HOSTING: "isHosting",
        HOSTING_NOTES: "hosting_notes",
        CLOUD: "cloud",
        ISP: "isp",
        CLOUD_PROVIDER: "cloud_provider",
        CLOUD_NOTES: "cloud_notes",
        HAS_ASN: "hasAsn",
        ASN: "asn",
        NOTES: "notes",
        DISCOVERY_DATE: "discovery_date",
    }

    const discoveryInit = {
        id: "",
        discovery_date:"",
        network_topology: "",
        num_of_it_staff: 0,
        isHosting: false,
        hosting_notes: "",
        cloud: false,
        isp: [],
        cloud_provider: [],
        cloud_notes: "",
        hasAsn: false,
        asn: 1,
        notes:"",
    }

    const asnPattern = /^[1-6][0-9]{0,5}$/
    const notesPattern = /^[a-zA-Z\s.\-?";:{}()&*%!@$,]{0,750}$/
    const datePattern = /^\d{4}-\d{2}-\d{2}$/
    const num_of_it_staffPattern = /^[1-9][0-9]{0,9}$/
    const no_it_staffPattern = /^0$/
    const change_it_staff_Pattern = /^0[0-9]{0,9}$/
    const discoveryReducer = (state, action) => {

        const discoveryObj = JSON.parse(JSON.stringify(state));


        switch (action.type) {

            case DISCOVERY_FIELDS.NETWORK_TOPOLOGY:

                discoveryObj.network_topology = action.payload.value;

                return discoveryObj;

            case DISCOVERY_FIELDS.NUM_OF_IT_STAFF:

                if(num_of_it_staffPattern.test(action.payload.value)){

                    discoveryObj.num_of_it_staff = action.payload.value;

                }else if(action.payload.value === ""){

                    discoveryObj.num_of_it_staff = 0;

                }else if(no_it_staffPattern.test(action.payload.value)){

                        discoveryObj.num_of_it_staff = 0;

                }else if(change_it_staff_Pattern.test(action.payload.value)){

                        discoveryObj.num_of_it_staff = action.payload.value.replace(/^0/, "");

                }

                return discoveryObj;

            case DISCOVERY_FIELDS.IS_HOSTING:

                const isHosting = action.payload.checked;

                if(isHosting){

                    discoveryObj.isHosting = isHosting;

                }else{

                    discoveryObj.isHosting = isHosting;
                    discoveryObj.hosting_notes = "";
                }

                return discoveryObj;

            case DISCOVERY_FIELDS.HOSTING_NOTES:

                if(notesPattern.test(action.payload.value)){

                    discoveryObj.hosting_notes = action.payload.value;
                }

                return discoveryObj;

            case  DISCOVERY_FIELDS.CLOUD:

                const cloud = action.payload.checked;

                if(cloud){

                    discoveryObj.cloud = cloud;

                }else{

                    discoveryObj.cloud = cloud;
                    discoveryObj.cloud_provider = [];
                    discoveryObj.cloud_notes = "";
                }

                return discoveryObj;

            case DISCOVERY_FIELDS.CLOUD_PROVIDER:
                const providers = discoveryObj.cloud_provider
                    .filter(provider => provider === action.payload.value);

                if(providers.length > 0){

                    discoveryObj.cloud_provider = [...discoveryObj.cloud_provider
                        .filter(provider => provider !== action.payload.value)];


                }else{

                    discoveryObj.cloud_provider.push(action.payload.value);
                }


                return discoveryObj;

            case DISCOVERY_FIELDS.CLOUD_NOTES:
                discoveryObj.cloud_notes = action.payload;
                return discoveryObj;

            case DISCOVERY_FIELDS.HAS_ASN:

                const hasAsn = action.payload;

                if(hasAsn){

                        discoveryObj.hasAsn = hasAsn;
                }else{

                        discoveryObj.hasAsn = hasAsn;
                        discoveryObj.asn = 1;
                }
                return discoveryObj;

            case DISCOVERY_FIELDS.ASN:

                if(asnPattern.test(action.payload.value)){

                    discoveryObj.asn = action.payload.value;

                }

                return discoveryObj;

            case DISCOVERY_FIELDS.ISP:

                console.log(action.payload.value);
                    const isp = discoveryObj.isp.filter(isp => isp === action.payload.value);

                    if(isp.length > 0){

                            discoveryObj.isp = [...discoveryObj.isp.filter(isp => isp !== action.payload.value)];
                    }else{

                                discoveryObj.isp.push(action.payload.value);

                                console.log(discoveryObj.isp);
                    }

                    console.log(discoveryObj.isp);
                    return discoveryObj;

            case DISCOVERY_FIELDS.NOTES:



                if(notesPattern.test(action.payload.value)){

                        discoveryObj.notes = action.payload.value;
                }

                return discoveryObj;

            case DISCOVERY_FIELDS.DISCOVERY_DATE:

                if(datePattern.test(action.payload.value)){
                    discoveryObj.discovery_date = action.payload.value;
                }

                return discoveryObj;

            default:
                return discoveryObj;
        }
    }

    return({
        att,
        DISCOVERY_FIELDS,
        discoveryInit,
        discoveryReducer
    })
};


export default useDiscovery;