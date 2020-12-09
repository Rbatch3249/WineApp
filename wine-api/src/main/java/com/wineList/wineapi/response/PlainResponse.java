package com.wineList.wineapi.response;

public class PlainResponse extends Response {
    public PlainResponse(Integer code, String message) {
        this.setCode(code);
        this.setMessage(message);
    }
}
