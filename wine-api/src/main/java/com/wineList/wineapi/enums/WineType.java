package com.wineList.wineapi.enums;

public enum WineType {
    RED("red"),
    ROSE("rose"),
    WHITE("white");

    private final String type;

    WineType(String value ){
        this.type = value;
    }
    public String getValue(){
        return type;
    }
}
