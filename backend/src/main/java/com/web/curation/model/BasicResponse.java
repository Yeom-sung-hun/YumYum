package com.web.curation.model;

import io.swagger.annotations.ApiModelProperty;



public class BasicResponse {
    @ApiModelProperty(value = "status", position = 1)
    public boolean status;
    @ApiModelProperty(value = "data", position = 2)
    public String data;
    @ApiModelProperty(value = "object", position = 3)
    public Object object;

    public BasicResponse(boolean status, String data) {
        this.status = status;
        this.data = data;
    }

}