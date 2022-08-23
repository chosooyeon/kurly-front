let url;

if(process.env.REACT_APP_MODE === 'development'){
    url = "https://jj372vsokc.execute-api.ap-northeast-2.amazonaws.com/dev"
}
else{
    url = "https://jj372vsokc.execute-api.ap-northeast-2.amazonaws.com"
}

export const baseUrl = url;