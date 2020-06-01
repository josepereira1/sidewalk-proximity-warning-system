/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 75.0, "minX": 0.0, "maxY": 808.0, "series": [{"data": [[0.0, 75.0], [0.1, 75.0], [0.2, 75.0], [0.3, 75.0], [0.4, 75.0], [0.5, 75.0], [0.6, 75.0], [0.7, 75.0], [0.8, 75.0], [0.9, 75.0], [1.0, 95.0], [1.1, 95.0], [1.2, 95.0], [1.3, 95.0], [1.4, 95.0], [1.5, 95.0], [1.6, 95.0], [1.7, 95.0], [1.8, 95.0], [1.9, 95.0], [2.0, 152.0], [2.1, 152.0], [2.2, 152.0], [2.3, 152.0], [2.4, 152.0], [2.5, 152.0], [2.6, 152.0], [2.7, 152.0], [2.8, 152.0], [2.9, 152.0], [3.0, 153.0], [3.1, 153.0], [3.2, 153.0], [3.3, 153.0], [3.4, 153.0], [3.5, 153.0], [3.6, 153.0], [3.7, 153.0], [3.8, 153.0], [3.9, 153.0], [4.0, 209.0], [4.1, 209.0], [4.2, 209.0], [4.3, 209.0], [4.4, 209.0], [4.5, 209.0], [4.6, 209.0], [4.7, 209.0], [4.8, 209.0], [4.9, 209.0], [5.0, 218.0], [5.1, 218.0], [5.2, 218.0], [5.3, 218.0], [5.4, 218.0], [5.5, 218.0], [5.6, 218.0], [5.7, 218.0], [5.8, 218.0], [5.9, 218.0], [6.0, 235.0], [6.1, 235.0], [6.2, 235.0], [6.3, 235.0], [6.4, 235.0], [6.5, 235.0], [6.6, 235.0], [6.7, 235.0], [6.8, 235.0], [6.9, 235.0], [7.0, 238.0], [7.1, 238.0], [7.2, 238.0], [7.3, 238.0], [7.4, 238.0], [7.5, 238.0], [7.6, 238.0], [7.7, 238.0], [7.8, 238.0], [7.9, 238.0], [8.0, 242.0], [8.1, 242.0], [8.2, 242.0], [8.3, 242.0], [8.4, 242.0], [8.5, 242.0], [8.6, 242.0], [8.7, 242.0], [8.8, 242.0], [8.9, 242.0], [9.0, 261.0], [9.1, 261.0], [9.2, 261.0], [9.3, 261.0], [9.4, 261.0], [9.5, 261.0], [9.6, 261.0], [9.7, 261.0], [9.8, 261.0], [9.9, 261.0], [10.0, 273.0], [10.1, 273.0], [10.2, 273.0], [10.3, 273.0], [10.4, 273.0], [10.5, 273.0], [10.6, 273.0], [10.7, 273.0], [10.8, 273.0], [10.9, 273.0], [11.0, 283.0], [11.1, 283.0], [11.2, 283.0], [11.3, 283.0], [11.4, 283.0], [11.5, 283.0], [11.6, 283.0], [11.7, 283.0], [11.8, 283.0], [11.9, 283.0], [12.0, 287.0], [12.1, 287.0], [12.2, 287.0], [12.3, 287.0], [12.4, 287.0], [12.5, 287.0], [12.6, 287.0], [12.7, 287.0], [12.8, 287.0], [12.9, 287.0], [13.0, 287.0], [13.1, 287.0], [13.2, 287.0], [13.3, 287.0], [13.4, 287.0], [13.5, 287.0], [13.6, 287.0], [13.7, 287.0], [13.8, 287.0], [13.9, 287.0], [14.0, 290.0], [14.1, 290.0], [14.2, 290.0], [14.3, 290.0], [14.4, 290.0], [14.5, 290.0], [14.6, 290.0], [14.7, 290.0], [14.8, 290.0], [14.9, 290.0], [15.0, 301.0], [15.1, 301.0], [15.2, 301.0], [15.3, 301.0], [15.4, 301.0], [15.5, 301.0], [15.6, 301.0], [15.7, 301.0], [15.8, 301.0], [15.9, 301.0], [16.0, 306.0], [16.1, 306.0], [16.2, 306.0], [16.3, 306.0], [16.4, 306.0], [16.5, 306.0], [16.6, 306.0], [16.7, 306.0], [16.8, 306.0], [16.9, 306.0], [17.0, 307.0], [17.1, 307.0], [17.2, 307.0], [17.3, 307.0], [17.4, 307.0], [17.5, 307.0], [17.6, 307.0], [17.7, 307.0], [17.8, 307.0], [17.9, 307.0], [18.0, 315.0], [18.1, 315.0], [18.2, 315.0], [18.3, 315.0], [18.4, 315.0], [18.5, 315.0], [18.6, 315.0], [18.7, 315.0], [18.8, 315.0], [18.9, 315.0], [19.0, 325.0], [19.1, 325.0], [19.2, 325.0], [19.3, 325.0], [19.4, 325.0], [19.5, 325.0], [19.6, 325.0], [19.7, 325.0], [19.8, 325.0], [19.9, 325.0], [20.0, 338.0], [20.1, 338.0], [20.2, 338.0], [20.3, 338.0], [20.4, 338.0], [20.5, 338.0], [20.6, 338.0], [20.7, 338.0], [20.8, 338.0], [20.9, 338.0], [21.0, 338.0], [21.1, 338.0], [21.2, 338.0], [21.3, 338.0], [21.4, 338.0], [21.5, 338.0], [21.6, 338.0], [21.7, 338.0], [21.8, 338.0], [21.9, 338.0], [22.0, 339.0], [22.1, 339.0], [22.2, 339.0], [22.3, 339.0], [22.4, 339.0], [22.5, 339.0], [22.6, 339.0], [22.7, 339.0], [22.8, 339.0], [22.9, 339.0], [23.0, 344.0], [23.1, 344.0], [23.2, 344.0], [23.3, 344.0], [23.4, 344.0], [23.5, 344.0], [23.6, 344.0], [23.7, 344.0], [23.8, 344.0], [23.9, 344.0], [24.0, 347.0], [24.1, 347.0], [24.2, 347.0], [24.3, 347.0], [24.4, 347.0], [24.5, 347.0], [24.6, 347.0], [24.7, 347.0], [24.8, 347.0], [24.9, 347.0], [25.0, 349.0], [25.1, 349.0], [25.2, 349.0], [25.3, 349.0], [25.4, 349.0], [25.5, 349.0], [25.6, 349.0], [25.7, 349.0], [25.8, 349.0], [25.9, 349.0], [26.0, 352.0], [26.1, 352.0], [26.2, 352.0], [26.3, 352.0], [26.4, 352.0], [26.5, 352.0], [26.6, 352.0], [26.7, 352.0], [26.8, 352.0], [26.9, 352.0], [27.0, 362.0], [27.1, 362.0], [27.2, 362.0], [27.3, 362.0], [27.4, 362.0], [27.5, 362.0], [27.6, 362.0], [27.7, 362.0], [27.8, 362.0], [27.9, 362.0], [28.0, 373.0], [28.1, 373.0], [28.2, 373.0], [28.3, 373.0], [28.4, 373.0], [28.5, 373.0], [28.6, 373.0], [28.7, 373.0], [28.8, 373.0], [28.9, 373.0], [29.0, 375.0], [29.1, 375.0], [29.2, 375.0], [29.3, 375.0], [29.4, 375.0], [29.5, 375.0], [29.6, 375.0], [29.7, 375.0], [29.8, 375.0], [29.9, 375.0], [30.0, 379.0], [30.1, 379.0], [30.2, 379.0], [30.3, 379.0], [30.4, 379.0], [30.5, 379.0], [30.6, 379.0], [30.7, 379.0], [30.8, 379.0], [30.9, 379.0], [31.0, 390.0], [31.1, 390.0], [31.2, 390.0], [31.3, 390.0], [31.4, 390.0], [31.5, 390.0], [31.6, 390.0], [31.7, 390.0], [31.8, 390.0], [31.9, 390.0], [32.0, 400.0], [32.1, 400.0], [32.2, 400.0], [32.3, 400.0], [32.4, 400.0], [32.5, 400.0], [32.6, 400.0], [32.7, 400.0], [32.8, 400.0], [32.9, 400.0], [33.0, 400.0], [33.1, 400.0], [33.2, 400.0], [33.3, 400.0], [33.4, 400.0], [33.5, 400.0], [33.6, 400.0], [33.7, 400.0], [33.8, 400.0], [33.9, 400.0], [34.0, 408.0], [34.1, 408.0], [34.2, 408.0], [34.3, 408.0], [34.4, 408.0], [34.5, 408.0], [34.6, 408.0], [34.7, 408.0], [34.8, 408.0], [34.9, 408.0], [35.0, 417.0], [35.1, 417.0], [35.2, 417.0], [35.3, 417.0], [35.4, 417.0], [35.5, 417.0], [35.6, 417.0], [35.7, 417.0], [35.8, 417.0], [35.9, 417.0], [36.0, 431.0], [36.1, 431.0], [36.2, 431.0], [36.3, 431.0], [36.4, 431.0], [36.5, 431.0], [36.6, 431.0], [36.7, 431.0], [36.8, 431.0], [36.9, 431.0], [37.0, 439.0], [37.1, 439.0], [37.2, 439.0], [37.3, 439.0], [37.4, 439.0], [37.5, 439.0], [37.6, 439.0], [37.7, 439.0], [37.8, 439.0], [37.9, 439.0], [38.0, 445.0], [38.1, 445.0], [38.2, 445.0], [38.3, 445.0], [38.4, 445.0], [38.5, 445.0], [38.6, 445.0], [38.7, 445.0], [38.8, 445.0], [38.9, 445.0], [39.0, 446.0], [39.1, 446.0], [39.2, 446.0], [39.3, 446.0], [39.4, 446.0], [39.5, 446.0], [39.6, 446.0], [39.7, 446.0], [39.8, 446.0], [39.9, 446.0], [40.0, 447.0], [40.1, 447.0], [40.2, 447.0], [40.3, 447.0], [40.4, 447.0], [40.5, 447.0], [40.6, 447.0], [40.7, 447.0], [40.8, 447.0], [40.9, 447.0], [41.0, 453.0], [41.1, 453.0], [41.2, 453.0], [41.3, 453.0], [41.4, 453.0], [41.5, 453.0], [41.6, 453.0], [41.7, 453.0], [41.8, 453.0], [41.9, 453.0], [42.0, 459.0], [42.1, 459.0], [42.2, 459.0], [42.3, 459.0], [42.4, 459.0], [42.5, 459.0], [42.6, 459.0], [42.7, 459.0], [42.8, 459.0], [42.9, 459.0], [43.0, 466.0], [43.1, 466.0], [43.2, 466.0], [43.3, 466.0], [43.4, 466.0], [43.5, 466.0], [43.6, 466.0], [43.7, 466.0], [43.8, 466.0], [43.9, 466.0], [44.0, 472.0], [44.1, 472.0], [44.2, 472.0], [44.3, 472.0], [44.4, 472.0], [44.5, 472.0], [44.6, 472.0], [44.7, 472.0], [44.8, 472.0], [44.9, 472.0], [45.0, 475.0], [45.1, 475.0], [45.2, 475.0], [45.3, 475.0], [45.4, 475.0], [45.5, 475.0], [45.6, 475.0], [45.7, 475.0], [45.8, 475.0], [45.9, 475.0], [46.0, 476.0], [46.1, 476.0], [46.2, 476.0], [46.3, 476.0], [46.4, 476.0], [46.5, 476.0], [46.6, 476.0], [46.7, 476.0], [46.8, 476.0], [46.9, 476.0], [47.0, 478.0], [47.1, 478.0], [47.2, 478.0], [47.3, 478.0], [47.4, 478.0], [47.5, 478.0], [47.6, 478.0], [47.7, 478.0], [47.8, 478.0], [47.9, 478.0], [48.0, 481.0], [48.1, 481.0], [48.2, 481.0], [48.3, 481.0], [48.4, 481.0], [48.5, 481.0], [48.6, 481.0], [48.7, 481.0], [48.8, 481.0], [48.9, 481.0], [49.0, 496.0], [49.1, 496.0], [49.2, 496.0], [49.3, 496.0], [49.4, 496.0], [49.5, 496.0], [49.6, 496.0], [49.7, 496.0], [49.8, 496.0], [49.9, 496.0], [50.0, 498.0], [50.1, 498.0], [50.2, 498.0], [50.3, 498.0], [50.4, 498.0], [50.5, 498.0], [50.6, 498.0], [50.7, 498.0], [50.8, 498.0], [50.9, 498.0], [51.0, 503.0], [51.1, 503.0], [51.2, 503.0], [51.3, 503.0], [51.4, 503.0], [51.5, 503.0], [51.6, 503.0], [51.7, 503.0], [51.8, 503.0], [51.9, 503.0], [52.0, 507.0], [52.1, 507.0], [52.2, 507.0], [52.3, 507.0], [52.4, 507.0], [52.5, 507.0], [52.6, 507.0], [52.7, 507.0], [52.8, 507.0], [52.9, 507.0], [53.0, 518.0], [53.1, 518.0], [53.2, 518.0], [53.3, 518.0], [53.4, 518.0], [53.5, 518.0], [53.6, 518.0], [53.7, 518.0], [53.8, 518.0], [53.9, 518.0], [54.0, 526.0], [54.1, 526.0], [54.2, 526.0], [54.3, 526.0], [54.4, 526.0], [54.5, 526.0], [54.6, 526.0], [54.7, 526.0], [54.8, 526.0], [54.9, 526.0], [55.0, 527.0], [55.1, 527.0], [55.2, 527.0], [55.3, 527.0], [55.4, 527.0], [55.5, 527.0], [55.6, 527.0], [55.7, 527.0], [55.8, 527.0], [55.9, 527.0], [56.0, 537.0], [56.1, 537.0], [56.2, 537.0], [56.3, 537.0], [56.4, 537.0], [56.5, 537.0], [56.6, 537.0], [56.7, 537.0], [56.8, 537.0], [56.9, 537.0], [57.0, 537.0], [57.1, 537.0], [57.2, 537.0], [57.3, 537.0], [57.4, 537.0], [57.5, 537.0], [57.6, 537.0], [57.7, 537.0], [57.8, 537.0], [57.9, 537.0], [58.0, 538.0], [58.1, 538.0], [58.2, 538.0], [58.3, 538.0], [58.4, 538.0], [58.5, 538.0], [58.6, 538.0], [58.7, 538.0], [58.8, 538.0], [58.9, 538.0], [59.0, 544.0], [59.1, 544.0], [59.2, 544.0], [59.3, 544.0], [59.4, 544.0], [59.5, 544.0], [59.6, 544.0], [59.7, 544.0], [59.8, 544.0], [59.9, 544.0], [60.0, 546.0], [60.1, 546.0], [60.2, 546.0], [60.3, 546.0], [60.4, 546.0], [60.5, 546.0], [60.6, 546.0], [60.7, 546.0], [60.8, 546.0], [60.9, 546.0], [61.0, 547.0], [61.1, 547.0], [61.2, 547.0], [61.3, 547.0], [61.4, 547.0], [61.5, 547.0], [61.6, 547.0], [61.7, 547.0], [61.8, 547.0], [61.9, 547.0], [62.0, 552.0], [62.1, 552.0], [62.2, 552.0], [62.3, 552.0], [62.4, 552.0], [62.5, 552.0], [62.6, 552.0], [62.7, 552.0], [62.8, 552.0], [62.9, 552.0], [63.0, 557.0], [63.1, 557.0], [63.2, 557.0], [63.3, 557.0], [63.4, 557.0], [63.5, 557.0], [63.6, 557.0], [63.7, 557.0], [63.8, 557.0], [63.9, 557.0], [64.0, 558.0], [64.1, 558.0], [64.2, 558.0], [64.3, 558.0], [64.4, 558.0], [64.5, 558.0], [64.6, 558.0], [64.7, 558.0], [64.8, 558.0], [64.9, 558.0], [65.0, 572.0], [65.1, 572.0], [65.2, 572.0], [65.3, 572.0], [65.4, 572.0], [65.5, 572.0], [65.6, 572.0], [65.7, 572.0], [65.8, 572.0], [65.9, 572.0], [66.0, 575.0], [66.1, 575.0], [66.2, 575.0], [66.3, 575.0], [66.4, 575.0], [66.5, 575.0], [66.6, 575.0], [66.7, 575.0], [66.8, 575.0], [66.9, 575.0], [67.0, 579.0], [67.1, 579.0], [67.2, 579.0], [67.3, 579.0], [67.4, 579.0], [67.5, 579.0], [67.6, 579.0], [67.7, 579.0], [67.8, 579.0], [67.9, 579.0], [68.0, 592.0], [68.1, 592.0], [68.2, 592.0], [68.3, 592.0], [68.4, 592.0], [68.5, 592.0], [68.6, 592.0], [68.7, 592.0], [68.8, 592.0], [68.9, 592.0], [69.0, 617.0], [69.1, 617.0], [69.2, 617.0], [69.3, 617.0], [69.4, 617.0], [69.5, 617.0], [69.6, 617.0], [69.7, 617.0], [69.8, 617.0], [69.9, 617.0], [70.0, 618.0], [70.1, 618.0], [70.2, 618.0], [70.3, 618.0], [70.4, 618.0], [70.5, 618.0], [70.6, 618.0], [70.7, 618.0], [70.8, 618.0], [70.9, 618.0], [71.0, 623.0], [71.1, 623.0], [71.2, 623.0], [71.3, 623.0], [71.4, 623.0], [71.5, 623.0], [71.6, 623.0], [71.7, 623.0], [71.8, 623.0], [71.9, 623.0], [72.0, 636.0], [72.1, 636.0], [72.2, 636.0], [72.3, 636.0], [72.4, 636.0], [72.5, 636.0], [72.6, 636.0], [72.7, 636.0], [72.8, 636.0], [72.9, 636.0], [73.0, 645.0], [73.1, 645.0], [73.2, 645.0], [73.3, 645.0], [73.4, 645.0], [73.5, 645.0], [73.6, 645.0], [73.7, 645.0], [73.8, 645.0], [73.9, 645.0], [74.0, 646.0], [74.1, 646.0], [74.2, 646.0], [74.3, 646.0], [74.4, 646.0], [74.5, 646.0], [74.6, 646.0], [74.7, 646.0], [74.8, 646.0], [74.9, 646.0], [75.0, 646.0], [75.1, 646.0], [75.2, 646.0], [75.3, 646.0], [75.4, 646.0], [75.5, 646.0], [75.6, 646.0], [75.7, 646.0], [75.8, 646.0], [75.9, 646.0], [76.0, 648.0], [76.1, 648.0], [76.2, 648.0], [76.3, 648.0], [76.4, 648.0], [76.5, 648.0], [76.6, 648.0], [76.7, 648.0], [76.8, 648.0], [76.9, 648.0], [77.0, 649.0], [77.1, 649.0], [77.2, 649.0], [77.3, 649.0], [77.4, 649.0], [77.5, 649.0], [77.6, 649.0], [77.7, 649.0], [77.8, 649.0], [77.9, 649.0], [78.0, 649.0], [78.1, 649.0], [78.2, 649.0], [78.3, 649.0], [78.4, 649.0], [78.5, 649.0], [78.6, 649.0], [78.7, 649.0], [78.8, 649.0], [78.9, 649.0], [79.0, 649.0], [79.1, 649.0], [79.2, 649.0], [79.3, 649.0], [79.4, 649.0], [79.5, 649.0], [79.6, 649.0], [79.7, 649.0], [79.8, 649.0], [79.9, 649.0], [80.0, 653.0], [80.1, 653.0], [80.2, 653.0], [80.3, 653.0], [80.4, 653.0], [80.5, 653.0], [80.6, 653.0], [80.7, 653.0], [80.8, 653.0], [80.9, 653.0], [81.0, 654.0], [81.1, 654.0], [81.2, 654.0], [81.3, 654.0], [81.4, 654.0], [81.5, 654.0], [81.6, 654.0], [81.7, 654.0], [81.8, 654.0], [81.9, 654.0], [82.0, 655.0], [82.1, 655.0], [82.2, 655.0], [82.3, 655.0], [82.4, 655.0], [82.5, 655.0], [82.6, 655.0], [82.7, 655.0], [82.8, 655.0], [82.9, 655.0], [83.0, 659.0], [83.1, 659.0], [83.2, 659.0], [83.3, 659.0], [83.4, 659.0], [83.5, 659.0], [83.6, 659.0], [83.7, 659.0], [83.8, 659.0], [83.9, 659.0], [84.0, 660.0], [84.1, 660.0], [84.2, 660.0], [84.3, 660.0], [84.4, 660.0], [84.5, 660.0], [84.6, 660.0], [84.7, 660.0], [84.8, 660.0], [84.9, 660.0], [85.0, 670.0], [85.1, 670.0], [85.2, 670.0], [85.3, 670.0], [85.4, 670.0], [85.5, 670.0], [85.6, 670.0], [85.7, 670.0], [85.8, 670.0], [85.9, 670.0], [86.0, 672.0], [86.1, 672.0], [86.2, 672.0], [86.3, 672.0], [86.4, 672.0], [86.5, 672.0], [86.6, 672.0], [86.7, 672.0], [86.8, 672.0], [86.9, 672.0], [87.0, 674.0], [87.1, 674.0], [87.2, 674.0], [87.3, 674.0], [87.4, 674.0], [87.5, 674.0], [87.6, 674.0], [87.7, 674.0], [87.8, 674.0], [87.9, 674.0], [88.0, 677.0], [88.1, 677.0], [88.2, 677.0], [88.3, 677.0], [88.4, 677.0], [88.5, 677.0], [88.6, 677.0], [88.7, 677.0], [88.8, 677.0], [88.9, 677.0], [89.0, 678.0], [89.1, 678.0], [89.2, 678.0], [89.3, 678.0], [89.4, 678.0], [89.5, 678.0], [89.6, 678.0], [89.7, 678.0], [89.8, 678.0], [89.9, 678.0], [90.0, 690.0], [90.1, 690.0], [90.2, 690.0], [90.3, 690.0], [90.4, 690.0], [90.5, 690.0], [90.6, 690.0], [90.7, 690.0], [90.8, 690.0], [90.9, 690.0], [91.0, 695.0], [91.1, 695.0], [91.2, 695.0], [91.3, 695.0], [91.4, 695.0], [91.5, 695.0], [91.6, 695.0], [91.7, 695.0], [91.8, 695.0], [91.9, 695.0], [92.0, 701.0], [92.1, 701.0], [92.2, 701.0], [92.3, 701.0], [92.4, 701.0], [92.5, 701.0], [92.6, 701.0], [92.7, 701.0], [92.8, 701.0], [92.9, 701.0], [93.0, 710.0], [93.1, 710.0], [93.2, 710.0], [93.3, 710.0], [93.4, 710.0], [93.5, 710.0], [93.6, 710.0], [93.7, 710.0], [93.8, 710.0], [93.9, 710.0], [94.0, 719.0], [94.1, 719.0], [94.2, 719.0], [94.3, 719.0], [94.4, 719.0], [94.5, 719.0], [94.6, 719.0], [94.7, 719.0], [94.8, 719.0], [94.9, 719.0], [95.0, 733.0], [95.1, 733.0], [95.2, 733.0], [95.3, 733.0], [95.4, 733.0], [95.5, 733.0], [95.6, 733.0], [95.7, 733.0], [95.8, 733.0], [95.9, 733.0], [96.0, 761.0], [96.1, 761.0], [96.2, 761.0], [96.3, 761.0], [96.4, 761.0], [96.5, 761.0], [96.6, 761.0], [96.7, 761.0], [96.8, 761.0], [96.9, 761.0], [97.0, 766.0], [97.1, 766.0], [97.2, 766.0], [97.3, 766.0], [97.4, 766.0], [97.5, 766.0], [97.6, 766.0], [97.7, 766.0], [97.8, 766.0], [97.9, 766.0], [98.0, 792.0], [98.1, 792.0], [98.2, 792.0], [98.3, 792.0], [98.4, 792.0], [98.5, 792.0], [98.6, 792.0], [98.7, 792.0], [98.8, 792.0], [98.9, 792.0], [99.0, 808.0], [99.1, 808.0], [99.2, 808.0], [99.3, 808.0], [99.4, 808.0], [99.5, 808.0], [99.6, 808.0], [99.7, 808.0], [99.8, 808.0], [99.9, 808.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 23.0, "series": [{"data": [[0.0, 2.0], [300.0, 17.0], [600.0, 23.0], [700.0, 7.0], [100.0, 2.0], [200.0, 11.0], [400.0, 19.0], [800.0, 1.0], [500.0, 18.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 49.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 51.0, "series": [{"data": [[0.0, 51.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 49.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 30.950000000000003, "minX": 1.59100938E12, "maxY": 30.950000000000003, "series": [{"data": [[1.59100938E12, 30.950000000000003]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59100938E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 296.33333333333337, "minX": 1.0, "maxY": 808.0, "series": [{"data": [[2.0, 761.0], [3.0, 660.0], [4.0, 646.0], [5.0, 733.0], [6.0, 653.0], [7.0, 623.0], [8.0, 766.0], [9.0, 672.0], [10.0, 690.0], [11.0, 792.0], [12.0, 670.0], [13.0, 649.0], [14.0, 636.0], [15.0, 678.0], [16.0, 710.0], [17.0, 296.33333333333337], [18.0, 649.0], [19.0, 427.0], [20.0, 384.5], [21.0, 654.0], [23.0, 670.5], [24.0, 360.66666666666663], [25.0, 428.0], [26.0, 455.0], [27.0, 677.0], [28.0, 368.25], [29.0, 471.0], [30.0, 498.5], [31.0, 362.5], [32.0, 401.0], [33.0, 409.0], [34.0, 457.0], [35.0, 372.00000000000006], [36.0, 443.3333333333333], [37.0, 466.5], [38.0, 482.5], [39.0, 404.5], [40.0, 472.5], [41.0, 544.0], [42.0, 464.0], [43.0, 518.0], [45.0, 472.0], [44.0, 496.0], [47.0, 492.5], [46.0, 498.0], [49.0, 478.1], [48.0, 435.0], [51.0, 557.0], [50.0, 503.0], [52.0, 506.0], [1.0, 808.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[30.950000000000003, 485.93]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 52.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 335.0, "minX": 1.59100938E12, "maxY": 430.0, "series": [{"data": [[1.59100938E12, 335.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.59100938E12, 430.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59100938E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 485.93, "minX": 1.59100938E12, "maxY": 485.93, "series": [{"data": [[1.59100938E12, 485.93]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59100938E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 485.81000000000006, "minX": 1.59100938E12, "maxY": 485.81000000000006, "series": [{"data": [[1.59100938E12, 485.81000000000006]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59100938E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 2.1700000000000013, "minX": 1.59100938E12, "maxY": 2.1700000000000013, "series": [{"data": [[1.59100938E12, 2.1700000000000013]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59100938E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 75.0, "minX": 1.59100938E12, "maxY": 808.0, "series": [{"data": [[1.59100938E12, 808.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.59100938E12, 75.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.59100938E12, 75.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.59100938E12, 75.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.59100938E12, 75.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.59100938E12, 497.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59100938E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 307.0, "minX": 35.0, "maxY": 579.0, "series": [{"data": [[65.0, 579.0], [35.0, 307.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 65.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 307.0, "minX": 35.0, "maxY": 579.0, "series": [{"data": [[65.0, 579.0], [35.0, 307.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 65.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.59100938E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.59100938E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59100938E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.59100938E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.59100938E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59100938E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.59100938E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.59100938E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59100938E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.59100938E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.59100938E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59100938E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

