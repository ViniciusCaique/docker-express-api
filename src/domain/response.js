

function Response(statusCode, httpsStatus, message, data) {
    return{
        statusCode: statusCode,
        httpsStatus: httpsStatus,
        message: message,
        data: data,
        timeStamp: new Date().toLocaleString()
    }
}

export default Response