package com.ant.recrutement.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
public class MessageResponse {
    @NonNull
    private boolean success;
    @NonNull
    private String message;
    @NonNull
    private String detail;

    private Object data;
}
