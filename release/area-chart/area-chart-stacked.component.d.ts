/// <reference types="core-js" />
import { EventEmitter, ElementRef, OnInit, OnChanges } from '@angular/core';
import { ViewDimensions } from '../common/view-dimensions.helper';
import { BaseChart } from '../common/base-chart.component';
export declare class AreaChartStacked extends BaseChart implements OnInit, OnChanges {
    element: HTMLElement;
    dims: ViewDimensions;
    scaleType: string;
    xDomain: any[];
    yDomain: any[];
    seriesDomain: any;
    xScale: any;
    yScale: any;
    transform: string;
    clipPathId: string;
    clipPath: string;
    colors: Function;
    view: any;
    results: any;
    margin: number[];
    scheme: any;
    customColors: any;
    legend: boolean;
    xAxis: any;
    yAxis: any;
    showXAxisLabel: any;
    showYAxisLabel: any;
    xAxisLabel: any;
    yAxisLabel: any;
    timeline: any;
    gradient: any;
    clickHandler: EventEmitter<{}>;
    constructor(element: ElementRef);
    ngOnInit(): void;
    ngOnChanges(): void;
    update(): void;
    getXDomain(): any[];
    getYDomain(): number[];
    getSeriesDomain(): any;
    getXScale(): any;
    getYScale(): any;
    getScaleType(values: any): string;
    isDate(value: any): boolean;
    addTooltip(): void;
    click(data: any, series: any): void;
    setColors(): void;
}
