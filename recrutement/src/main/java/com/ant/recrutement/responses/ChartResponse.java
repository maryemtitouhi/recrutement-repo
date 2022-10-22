package com.ant.recrutement.responses;

import lombok.Data;

import java.util.List;

@Data
public class ChartResponse {

    private List<String> labels;
    private List<Number> values;

}
