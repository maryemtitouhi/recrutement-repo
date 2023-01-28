package com.ant.recrutement.responses;

import lombok.Data;

import java.util.List;

@Data
public class ChartResponse {

    private List<String> labels;
    private List<Number> values;
    private List<Number> values2;
    private List<Number> values3;
    private List<Number> values4;
    private List<Number> values5;

}
