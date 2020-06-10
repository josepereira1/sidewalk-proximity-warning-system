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
        data: {"result": {"minY": 127.0, "minX": 0.0, "maxY": 1108.0, "series": [{"data": [[0.0, 127.0], [0.1, 157.0], [0.2, 158.0], [0.3, 158.0], [0.4, 167.0], [0.5, 168.0], [0.6, 168.0], [0.7, 168.0], [0.8, 173.0], [0.9, 177.0], [1.0, 181.0], [1.1, 182.0], [1.2, 182.0], [1.3, 185.0], [1.4, 189.0], [1.5, 189.0], [1.6, 194.0], [1.7, 195.0], [1.8, 200.0], [1.9, 201.0], [2.0, 203.0], [2.1, 206.0], [2.2, 206.0], [2.3, 206.0], [2.4, 210.0], [2.5, 212.0], [2.6, 213.0], [2.7, 214.0], [2.8, 215.0], [2.9, 216.0], [3.0, 219.0], [3.1, 220.0], [3.2, 225.0], [3.3, 230.0], [3.4, 231.0], [3.5, 236.0], [3.6, 237.0], [3.7, 240.0], [3.8, 240.0], [3.9, 241.0], [4.0, 244.0], [4.1, 245.0], [4.2, 249.0], [4.3, 252.0], [4.4, 259.0], [4.5, 259.0], [4.6, 259.0], [4.7, 263.0], [4.8, 264.0], [4.9, 265.0], [5.0, 265.0], [5.1, 266.0], [5.2, 267.0], [5.3, 268.0], [5.4, 269.0], [5.5, 269.0], [5.6, 269.0], [5.7, 270.0], [5.8, 274.0], [5.9, 275.0], [6.0, 276.0], [6.1, 277.0], [6.2, 277.0], [6.3, 277.0], [6.4, 279.0], [6.5, 279.0], [6.6, 280.0], [6.7, 281.0], [6.8, 282.0], [6.9, 284.0], [7.0, 284.0], [7.1, 285.0], [7.2, 286.0], [7.3, 286.0], [7.4, 287.0], [7.5, 289.0], [7.6, 290.0], [7.7, 291.0], [7.8, 292.0], [7.9, 292.0], [8.0, 292.0], [8.1, 292.0], [8.2, 293.0], [8.3, 293.0], [8.4, 293.0], [8.5, 295.0], [8.6, 296.0], [8.7, 296.0], [8.8, 299.0], [8.9, 302.0], [9.0, 302.0], [9.1, 303.0], [9.2, 304.0], [9.3, 304.0], [9.4, 304.0], [9.5, 307.0], [9.6, 307.0], [9.7, 309.0], [9.8, 309.0], [9.9, 309.0], [10.0, 310.0], [10.1, 310.0], [10.2, 310.0], [10.3, 311.0], [10.4, 312.0], [10.5, 313.0], [10.6, 313.0], [10.7, 313.0], [10.8, 314.0], [10.9, 314.0], [11.0, 314.0], [11.1, 316.0], [11.2, 316.0], [11.3, 316.0], [11.4, 316.0], [11.5, 318.0], [11.6, 318.0], [11.7, 319.0], [11.8, 321.0], [11.9, 322.0], [12.0, 323.0], [12.1, 324.0], [12.2, 324.0], [12.3, 325.0], [12.4, 326.0], [12.5, 326.0], [12.6, 328.0], [12.7, 328.0], [12.8, 329.0], [12.9, 329.0], [13.0, 330.0], [13.1, 331.0], [13.2, 331.0], [13.3, 332.0], [13.4, 332.0], [13.5, 333.0], [13.6, 333.0], [13.7, 334.0], [13.8, 335.0], [13.9, 335.0], [14.0, 336.0], [14.1, 336.0], [14.2, 336.0], [14.3, 336.0], [14.4, 337.0], [14.5, 337.0], [14.6, 337.0], [14.7, 338.0], [14.8, 339.0], [14.9, 339.0], [15.0, 341.0], [15.1, 344.0], [15.2, 344.0], [15.3, 344.0], [15.4, 344.0], [15.5, 344.0], [15.6, 344.0], [15.7, 345.0], [15.8, 346.0], [15.9, 347.0], [16.0, 349.0], [16.1, 349.0], [16.2, 349.0], [16.3, 350.0], [16.4, 350.0], [16.5, 351.0], [16.6, 351.0], [16.7, 351.0], [16.8, 352.0], [16.9, 352.0], [17.0, 353.0], [17.1, 353.0], [17.2, 353.0], [17.3, 353.0], [17.4, 354.0], [17.5, 354.0], [17.6, 354.0], [17.7, 355.0], [17.8, 355.0], [17.9, 356.0], [18.0, 356.0], [18.1, 357.0], [18.2, 358.0], [18.3, 358.0], [18.4, 358.0], [18.5, 358.0], [18.6, 359.0], [18.7, 360.0], [18.8, 360.0], [18.9, 361.0], [19.0, 361.0], [19.1, 361.0], [19.2, 361.0], [19.3, 362.0], [19.4, 362.0], [19.5, 363.0], [19.6, 363.0], [19.7, 364.0], [19.8, 366.0], [19.9, 366.0], [20.0, 368.0], [20.1, 368.0], [20.2, 368.0], [20.3, 368.0], [20.4, 369.0], [20.5, 369.0], [20.6, 370.0], [20.7, 371.0], [20.8, 371.0], [20.9, 372.0], [21.0, 373.0], [21.1, 373.0], [21.2, 374.0], [21.3, 374.0], [21.4, 374.0], [21.5, 374.0], [21.6, 376.0], [21.7, 376.0], [21.8, 376.0], [21.9, 376.0], [22.0, 377.0], [22.1, 377.0], [22.2, 377.0], [22.3, 378.0], [22.4, 378.0], [22.5, 379.0], [22.6, 379.0], [22.7, 379.0], [22.8, 380.0], [22.9, 380.0], [23.0, 382.0], [23.1, 382.0], [23.2, 382.0], [23.3, 382.0], [23.4, 383.0], [23.5, 384.0], [23.6, 384.0], [23.7, 384.0], [23.8, 384.0], [23.9, 385.0], [24.0, 385.0], [24.1, 385.0], [24.2, 386.0], [24.3, 387.0], [24.4, 388.0], [24.5, 388.0], [24.6, 389.0], [24.7, 390.0], [24.8, 390.0], [24.9, 390.0], [25.0, 390.0], [25.1, 390.0], [25.2, 391.0], [25.3, 392.0], [25.4, 392.0], [25.5, 392.0], [25.6, 393.0], [25.7, 393.0], [25.8, 393.0], [25.9, 393.0], [26.0, 394.0], [26.1, 396.0], [26.2, 397.0], [26.3, 398.0], [26.4, 398.0], [26.5, 399.0], [26.6, 400.0], [26.7, 400.0], [26.8, 400.0], [26.9, 401.0], [27.0, 401.0], [27.1, 402.0], [27.2, 402.0], [27.3, 402.0], [27.4, 402.0], [27.5, 403.0], [27.6, 403.0], [27.7, 404.0], [27.8, 404.0], [27.9, 405.0], [28.0, 405.0], [28.1, 405.0], [28.2, 405.0], [28.3, 405.0], [28.4, 405.0], [28.5, 407.0], [28.6, 407.0], [28.7, 407.0], [28.8, 407.0], [28.9, 408.0], [29.0, 409.0], [29.1, 409.0], [29.2, 409.0], [29.3, 409.0], [29.4, 410.0], [29.5, 410.0], [29.6, 411.0], [29.7, 411.0], [29.8, 411.0], [29.9, 412.0], [30.0, 412.0], [30.1, 412.0], [30.2, 412.0], [30.3, 413.0], [30.4, 413.0], [30.5, 413.0], [30.6, 414.0], [30.7, 414.0], [30.8, 414.0], [30.9, 414.0], [31.0, 415.0], [31.1, 415.0], [31.2, 416.0], [31.3, 416.0], [31.4, 418.0], [31.5, 418.0], [31.6, 418.0], [31.7, 419.0], [31.8, 419.0], [31.9, 419.0], [32.0, 419.0], [32.1, 419.0], [32.2, 420.0], [32.3, 420.0], [32.4, 420.0], [32.5, 420.0], [32.6, 420.0], [32.7, 421.0], [32.8, 421.0], [32.9, 421.0], [33.0, 421.0], [33.1, 421.0], [33.2, 422.0], [33.3, 423.0], [33.4, 423.0], [33.5, 423.0], [33.6, 424.0], [33.7, 425.0], [33.8, 425.0], [33.9, 425.0], [34.0, 426.0], [34.1, 426.0], [34.2, 426.0], [34.3, 426.0], [34.4, 427.0], [34.5, 427.0], [34.6, 427.0], [34.7, 427.0], [34.8, 428.0], [34.9, 428.0], [35.0, 428.0], [35.1, 430.0], [35.2, 430.0], [35.3, 430.0], [35.4, 432.0], [35.5, 433.0], [35.6, 433.0], [35.7, 433.0], [35.8, 434.0], [35.9, 434.0], [36.0, 434.0], [36.1, 434.0], [36.2, 434.0], [36.3, 434.0], [36.4, 434.0], [36.5, 434.0], [36.6, 435.0], [36.7, 435.0], [36.8, 435.0], [36.9, 435.0], [37.0, 435.0], [37.1, 436.0], [37.2, 436.0], [37.3, 436.0], [37.4, 436.0], [37.5, 437.0], [37.6, 437.0], [37.7, 438.0], [37.8, 438.0], [37.9, 438.0], [38.0, 438.0], [38.1, 439.0], [38.2, 439.0], [38.3, 439.0], [38.4, 440.0], [38.5, 440.0], [38.6, 440.0], [38.7, 440.0], [38.8, 441.0], [38.9, 442.0], [39.0, 442.0], [39.1, 442.0], [39.2, 442.0], [39.3, 444.0], [39.4, 444.0], [39.5, 444.0], [39.6, 444.0], [39.7, 445.0], [39.8, 445.0], [39.9, 445.0], [40.0, 446.0], [40.1, 447.0], [40.2, 447.0], [40.3, 447.0], [40.4, 447.0], [40.5, 448.0], [40.6, 448.0], [40.7, 448.0], [40.8, 448.0], [40.9, 448.0], [41.0, 448.0], [41.1, 449.0], [41.2, 451.0], [41.3, 451.0], [41.4, 451.0], [41.5, 451.0], [41.6, 451.0], [41.7, 454.0], [41.8, 454.0], [41.9, 454.0], [42.0, 454.0], [42.1, 454.0], [42.2, 454.0], [42.3, 454.0], [42.4, 455.0], [42.5, 455.0], [42.6, 455.0], [42.7, 455.0], [42.8, 455.0], [42.9, 455.0], [43.0, 456.0], [43.1, 457.0], [43.2, 458.0], [43.3, 459.0], [43.4, 460.0], [43.5, 460.0], [43.6, 461.0], [43.7, 461.0], [43.8, 462.0], [43.9, 462.0], [44.0, 463.0], [44.1, 464.0], [44.2, 464.0], [44.3, 464.0], [44.4, 465.0], [44.5, 465.0], [44.6, 465.0], [44.7, 466.0], [44.8, 466.0], [44.9, 466.0], [45.0, 466.0], [45.1, 467.0], [45.2, 467.0], [45.3, 468.0], [45.4, 468.0], [45.5, 469.0], [45.6, 469.0], [45.7, 469.0], [45.8, 470.0], [45.9, 470.0], [46.0, 471.0], [46.1, 471.0], [46.2, 472.0], [46.3, 472.0], [46.4, 472.0], [46.5, 473.0], [46.6, 474.0], [46.7, 474.0], [46.8, 475.0], [46.9, 475.0], [47.0, 476.0], [47.1, 477.0], [47.2, 477.0], [47.3, 479.0], [47.4, 479.0], [47.5, 480.0], [47.6, 482.0], [47.7, 482.0], [47.8, 482.0], [47.9, 482.0], [48.0, 484.0], [48.1, 484.0], [48.2, 484.0], [48.3, 485.0], [48.4, 486.0], [48.5, 486.0], [48.6, 486.0], [48.7, 487.0], [48.8, 487.0], [48.9, 487.0], [49.0, 488.0], [49.1, 489.0], [49.2, 489.0], [49.3, 489.0], [49.4, 489.0], [49.5, 490.0], [49.6, 490.0], [49.7, 490.0], [49.8, 491.0], [49.9, 491.0], [50.0, 491.0], [50.1, 492.0], [50.2, 492.0], [50.3, 492.0], [50.4, 492.0], [50.5, 493.0], [50.6, 493.0], [50.7, 493.0], [50.8, 493.0], [50.9, 493.0], [51.0, 494.0], [51.1, 494.0], [51.2, 495.0], [51.3, 496.0], [51.4, 497.0], [51.5, 497.0], [51.6, 497.0], [51.7, 497.0], [51.8, 498.0], [51.9, 499.0], [52.0, 499.0], [52.1, 500.0], [52.2, 500.0], [52.3, 501.0], [52.4, 502.0], [52.5, 502.0], [52.6, 503.0], [52.7, 503.0], [52.8, 503.0], [52.9, 503.0], [53.0, 503.0], [53.1, 503.0], [53.2, 503.0], [53.3, 504.0], [53.4, 504.0], [53.5, 505.0], [53.6, 505.0], [53.7, 505.0], [53.8, 506.0], [53.9, 506.0], [54.0, 506.0], [54.1, 506.0], [54.2, 506.0], [54.3, 507.0], [54.4, 507.0], [54.5, 508.0], [54.6, 508.0], [54.7, 508.0], [54.8, 508.0], [54.9, 510.0], [55.0, 510.0], [55.1, 510.0], [55.2, 510.0], [55.3, 510.0], [55.4, 510.0], [55.5, 510.0], [55.6, 511.0], [55.7, 511.0], [55.8, 511.0], [55.9, 511.0], [56.0, 512.0], [56.1, 512.0], [56.2, 512.0], [56.3, 512.0], [56.4, 512.0], [56.5, 513.0], [56.6, 513.0], [56.7, 514.0], [56.8, 514.0], [56.9, 515.0], [57.0, 515.0], [57.1, 515.0], [57.2, 516.0], [57.3, 516.0], [57.4, 517.0], [57.5, 517.0], [57.6, 517.0], [57.7, 517.0], [57.8, 518.0], [57.9, 518.0], [58.0, 518.0], [58.1, 519.0], [58.2, 519.0], [58.3, 519.0], [58.4, 520.0], [58.5, 520.0], [58.6, 520.0], [58.7, 520.0], [58.8, 521.0], [58.9, 521.0], [59.0, 521.0], [59.1, 521.0], [59.2, 521.0], [59.3, 521.0], [59.4, 523.0], [59.5, 523.0], [59.6, 523.0], [59.7, 523.0], [59.8, 524.0], [59.9, 525.0], [60.0, 525.0], [60.1, 525.0], [60.2, 525.0], [60.3, 525.0], [60.4, 526.0], [60.5, 526.0], [60.6, 527.0], [60.7, 527.0], [60.8, 527.0], [60.9, 527.0], [61.0, 528.0], [61.1, 528.0], [61.2, 528.0], [61.3, 528.0], [61.4, 528.0], [61.5, 529.0], [61.6, 530.0], [61.7, 530.0], [61.8, 531.0], [61.9, 531.0], [62.0, 532.0], [62.1, 532.0], [62.2, 532.0], [62.3, 533.0], [62.4, 533.0], [62.5, 534.0], [62.6, 534.0], [62.7, 535.0], [62.8, 535.0], [62.9, 536.0], [63.0, 537.0], [63.1, 539.0], [63.2, 539.0], [63.3, 539.0], [63.4, 541.0], [63.5, 541.0], [63.6, 543.0], [63.7, 544.0], [63.8, 544.0], [63.9, 545.0], [64.0, 545.0], [64.1, 546.0], [64.2, 546.0], [64.3, 546.0], [64.4, 546.0], [64.5, 547.0], [64.6, 547.0], [64.7, 547.0], [64.8, 547.0], [64.9, 547.0], [65.0, 548.0], [65.1, 549.0], [65.2, 549.0], [65.3, 549.0], [65.4, 550.0], [65.5, 550.0], [65.6, 550.0], [65.7, 552.0], [65.8, 552.0], [65.9, 553.0], [66.0, 554.0], [66.1, 554.0], [66.2, 555.0], [66.3, 555.0], [66.4, 555.0], [66.5, 556.0], [66.6, 556.0], [66.7, 557.0], [66.8, 557.0], [66.9, 559.0], [67.0, 559.0], [67.1, 559.0], [67.2, 559.0], [67.3, 559.0], [67.4, 561.0], [67.5, 561.0], [67.6, 561.0], [67.7, 562.0], [67.8, 562.0], [67.9, 563.0], [68.0, 563.0], [68.1, 563.0], [68.2, 564.0], [68.3, 564.0], [68.4, 564.0], [68.5, 564.0], [68.6, 564.0], [68.7, 565.0], [68.8, 565.0], [68.9, 566.0], [69.0, 569.0], [69.1, 570.0], [69.2, 571.0], [69.3, 571.0], [69.4, 571.0], [69.5, 571.0], [69.6, 571.0], [69.7, 571.0], [69.8, 573.0], [69.9, 574.0], [70.0, 574.0], [70.1, 575.0], [70.2, 575.0], [70.3, 576.0], [70.4, 577.0], [70.5, 578.0], [70.6, 578.0], [70.7, 578.0], [70.8, 578.0], [70.9, 578.0], [71.0, 579.0], [71.1, 580.0], [71.2, 580.0], [71.3, 581.0], [71.4, 582.0], [71.5, 582.0], [71.6, 584.0], [71.7, 584.0], [71.8, 584.0], [71.9, 584.0], [72.0, 586.0], [72.1, 587.0], [72.2, 587.0], [72.3, 587.0], [72.4, 587.0], [72.5, 588.0], [72.6, 588.0], [72.7, 589.0], [72.8, 589.0], [72.9, 590.0], [73.0, 590.0], [73.1, 590.0], [73.2, 592.0], [73.3, 592.0], [73.4, 594.0], [73.5, 595.0], [73.6, 595.0], [73.7, 596.0], [73.8, 596.0], [73.9, 596.0], [74.0, 596.0], [74.1, 597.0], [74.2, 597.0], [74.3, 597.0], [74.4, 597.0], [74.5, 597.0], [74.6, 598.0], [74.7, 598.0], [74.8, 600.0], [74.9, 600.0], [75.0, 601.0], [75.1, 601.0], [75.2, 602.0], [75.3, 602.0], [75.4, 602.0], [75.5, 602.0], [75.6, 603.0], [75.7, 603.0], [75.8, 605.0], [75.9, 606.0], [76.0, 608.0], [76.1, 609.0], [76.2, 610.0], [76.3, 611.0], [76.4, 611.0], [76.5, 612.0], [76.6, 612.0], [76.7, 613.0], [76.8, 614.0], [76.9, 615.0], [77.0, 615.0], [77.1, 616.0], [77.2, 616.0], [77.3, 616.0], [77.4, 616.0], [77.5, 616.0], [77.6, 616.0], [77.7, 618.0], [77.8, 618.0], [77.9, 618.0], [78.0, 619.0], [78.1, 620.0], [78.2, 621.0], [78.3, 621.0], [78.4, 621.0], [78.5, 622.0], [78.6, 624.0], [78.7, 625.0], [78.8, 626.0], [78.9, 626.0], [79.0, 626.0], [79.1, 627.0], [79.2, 629.0], [79.3, 630.0], [79.4, 631.0], [79.5, 631.0], [79.6, 631.0], [79.7, 631.0], [79.8, 632.0], [79.9, 633.0], [80.0, 634.0], [80.1, 635.0], [80.2, 635.0], [80.3, 635.0], [80.4, 636.0], [80.5, 637.0], [80.6, 639.0], [80.7, 639.0], [80.8, 640.0], [80.9, 642.0], [81.0, 642.0], [81.1, 643.0], [81.2, 643.0], [81.3, 643.0], [81.4, 644.0], [81.5, 646.0], [81.6, 647.0], [81.7, 649.0], [81.8, 650.0], [81.9, 651.0], [82.0, 652.0], [82.1, 653.0], [82.2, 653.0], [82.3, 653.0], [82.4, 654.0], [82.5, 655.0], [82.6, 657.0], [82.7, 658.0], [82.8, 659.0], [82.9, 659.0], [83.0, 660.0], [83.1, 661.0], [83.2, 665.0], [83.3, 665.0], [83.4, 666.0], [83.5, 667.0], [83.6, 668.0], [83.7, 668.0], [83.8, 670.0], [83.9, 672.0], [84.0, 673.0], [84.1, 673.0], [84.2, 674.0], [84.3, 674.0], [84.4, 674.0], [84.5, 676.0], [84.6, 676.0], [84.7, 677.0], [84.8, 677.0], [84.9, 677.0], [85.0, 677.0], [85.1, 678.0], [85.2, 679.0], [85.3, 679.0], [85.4, 680.0], [85.5, 681.0], [85.6, 681.0], [85.7, 681.0], [85.8, 682.0], [85.9, 684.0], [86.0, 686.0], [86.1, 688.0], [86.2, 690.0], [86.3, 691.0], [86.4, 691.0], [86.5, 692.0], [86.6, 692.0], [86.7, 694.0], [86.8, 694.0], [86.9, 695.0], [87.0, 695.0], [87.1, 695.0], [87.2, 697.0], [87.3, 697.0], [87.4, 698.0], [87.5, 700.0], [87.6, 702.0], [87.7, 702.0], [87.8, 703.0], [87.9, 705.0], [88.0, 706.0], [88.1, 706.0], [88.2, 708.0], [88.3, 710.0], [88.4, 712.0], [88.5, 713.0], [88.6, 717.0], [88.7, 717.0], [88.8, 718.0], [88.9, 719.0], [89.0, 721.0], [89.1, 721.0], [89.2, 722.0], [89.3, 723.0], [89.4, 725.0], [89.5, 725.0], [89.6, 731.0], [89.7, 732.0], [89.8, 733.0], [89.9, 733.0], [90.0, 734.0], [90.1, 735.0], [90.2, 737.0], [90.3, 739.0], [90.4, 740.0], [90.5, 740.0], [90.6, 740.0], [90.7, 740.0], [90.8, 744.0], [90.9, 745.0], [91.0, 746.0], [91.1, 746.0], [91.2, 747.0], [91.3, 749.0], [91.4, 752.0], [91.5, 752.0], [91.6, 753.0], [91.7, 754.0], [91.8, 754.0], [91.9, 757.0], [92.0, 759.0], [92.1, 759.0], [92.2, 762.0], [92.3, 762.0], [92.4, 762.0], [92.5, 762.0], [92.6, 765.0], [92.7, 767.0], [92.8, 769.0], [92.9, 769.0], [93.0, 771.0], [93.1, 771.0], [93.2, 772.0], [93.3, 773.0], [93.4, 773.0], [93.5, 773.0], [93.6, 774.0], [93.7, 774.0], [93.8, 775.0], [93.9, 778.0], [94.0, 778.0], [94.1, 779.0], [94.2, 783.0], [94.3, 784.0], [94.4, 786.0], [94.5, 787.0], [94.6, 788.0], [94.7, 788.0], [94.8, 790.0], [94.9, 793.0], [95.0, 795.0], [95.1, 798.0], [95.2, 799.0], [95.3, 800.0], [95.4, 801.0], [95.5, 801.0], [95.6, 802.0], [95.7, 803.0], [95.8, 803.0], [95.9, 804.0], [96.0, 805.0], [96.1, 807.0], [96.2, 808.0], [96.3, 811.0], [96.4, 813.0], [96.5, 815.0], [96.6, 816.0], [96.7, 817.0], [96.8, 817.0], [96.9, 821.0], [97.0, 822.0], [97.1, 824.0], [97.2, 832.0], [97.3, 833.0], [97.4, 839.0], [97.5, 842.0], [97.6, 848.0], [97.7, 853.0], [97.8, 854.0], [97.9, 855.0], [98.0, 859.0], [98.1, 863.0], [98.2, 864.0], [98.3, 866.0], [98.4, 874.0], [98.5, 875.0], [98.6, 880.0], [98.7, 888.0], [98.8, 901.0], [98.9, 904.0], [99.0, 905.0], [99.1, 908.0], [99.2, 916.0], [99.3, 919.0], [99.4, 949.0], [99.5, 971.0], [99.6, 990.0], [99.7, 1011.0], [99.8, 1049.0], [99.9, 1108.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 255.0, "series": [{"data": [[1100.0, 1.0], [300.0, 177.0], [600.0, 127.0], [700.0, 78.0], [100.0, 17.0], [200.0, 72.0], [400.0, 255.0], [800.0, 35.0], [900.0, 9.0], [500.0, 227.0], [1000.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 477.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 523.0, "series": [{"data": [[0.0, 523.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 477.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 84.77699999999999, "minX": 1.59101046E12, "maxY": 84.77699999999999, "series": [{"data": [[1.59101046E12, 84.77699999999999]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101046E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 342.0, "minX": 1.0, "maxY": 919.0, "series": [{"data": [[2.0, 679.0], [3.0, 692.0], [4.0, 618.0], [5.0, 759.0], [6.0, 717.0], [7.0, 771.0], [8.0, 786.0], [9.0, 682.0], [10.0, 705.0], [11.0, 732.0], [12.0, 773.0], [13.0, 815.0], [14.0, 778.0], [15.0, 511.0], [16.0, 848.0], [17.0, 596.0], [18.0, 798.0], [19.0, 659.0], [20.0, 804.0], [21.0, 547.0], [22.0, 503.0], [23.0, 612.0], [24.0, 801.0], [25.0, 757.0], [26.0, 603.0], [27.0, 695.0], [28.0, 864.0], [29.0, 767.0], [30.0, 570.0], [31.0, 702.0], [33.0, 725.0], [32.0, 577.0], [35.0, 605.0], [34.0, 783.0], [37.0, 642.0], [36.0, 487.0], [39.0, 430.0], [38.0, 888.0], [41.0, 497.0], [40.0, 618.0], [43.0, 703.0], [42.0, 595.0], [45.0, 859.0], [44.0, 503.0], [47.0, 698.0], [46.0, 606.0], [49.0, 602.0], [48.0, 409.0], [51.0, 454.0], [50.0, 734.0], [53.0, 621.0], [52.0, 527.0], [55.0, 477.0], [54.0, 454.0], [57.0, 342.0], [56.0, 527.25], [59.0, 461.0], [58.0, 398.74999999999994], [61.0, 536.75], [60.0, 460.75], [62.0, 410.8571428571429], [63.0, 458.875], [67.0, 399.85714285714283], [66.0, 450.8181818181818], [65.0, 543.8125], [64.0, 388.33333333333326], [71.0, 432.18749999999994], [70.0, 453.0], [69.0, 461.0], [68.0, 438.06666666666666], [75.0, 376.17647058823536], [74.0, 429.9268292682927], [73.0, 419.83333333333337], [72.0, 437.72], [76.0, 397.3414634146341], [77.0, 437.63414634146346], [79.0, 420.27659574468083], [78.0, 442.4102564102564], [82.0, 422.8], [83.0, 441.8666666666667], [81.0, 459.08333333333337], [80.0, 495.0526315789474], [84.0, 437.72727272727275], [87.0, 429.54545454545456], [86.0, 459.70000000000005], [85.0, 452.46153846153845], [88.0, 440.3333333333333], [90.0, 488.875], [89.0, 543.375], [91.0, 507.8333333333335], [93.0, 436.94117647058823], [94.0, 517.0], [92.0, 458.6666666666667], [95.0, 510.66666666666663], [99.0, 523.3333333333334], [98.0, 538.4285714285714], [97.0, 505.50000000000006], [96.0, 554.25], [101.0, 573.8], [100.0, 563.0], [103.0, 551.4444444444445], [102.0, 552.1428571428572], [105.0, 554.4], [107.0, 556.6666666666666], [106.0, 582.4285714285714], [104.0, 611.0], [109.0, 622.75], [111.0, 688.7272727272727], [110.0, 640.2222222222222], [108.0, 581.7499999999999], [115.0, 562.6666666666666], [114.0, 614.125], [113.0, 628.6666666666666], [112.0, 550.3], [116.0, 633.9090909090909], [117.0, 682.3], [119.0, 672.2], [118.0, 643.3333333333334], [120.0, 611.6666666666666], [121.0, 662.6], [122.0, 626.75], [123.0, 609.6666666666666], [125.0, 743.4], [124.0, 619.75], [127.0, 596.5], [126.0, 743.5], [128.0, 829.5], [132.0, 741.6666666666666], [131.0, 684.1666666666667], [129.0, 779.6666666666666], [135.0, 658.6], [134.0, 527.0], [133.0, 686.0], [130.0, 643.0], [136.0, 787.2], [138.0, 630.75], [137.0, 758.2], [143.0, 710.3333333333334], [142.0, 699.4], [141.0, 660.0], [140.0, 636.0], [139.0, 447.0], [146.0, 672.0], [145.0, 919.0], [144.0, 815.3333333333334], [1.0, 616.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[84.77800000000008, 502.46299999999985]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 146.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3350.0, "minX": 1.59101046E12, "maxY": 4300.0, "series": [{"data": [[1.59101046E12, 3350.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.59101046E12, 4300.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101046E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 502.46299999999985, "minX": 1.59101046E12, "maxY": 502.46299999999985, "series": [{"data": [[1.59101046E12, 502.46299999999985]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101046E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 502.39200000000005, "minX": 1.59101046E12, "maxY": 502.39200000000005, "series": [{"data": [[1.59101046E12, 502.39200000000005]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101046E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2.311, "minX": 1.59101046E12, "maxY": 2.311, "series": [{"data": [[1.59101046E12, 2.311]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101046E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 127.0, "minX": 1.59101046E12, "maxY": 1108.0, "series": [{"data": [[1.59101046E12, 1108.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.59101046E12, 173.03599904537202]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.59101046E12, 176.6396003818512]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.59101046E12, 175.037999522686]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.59101046E12, 127.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.59101046E12, 491.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101046E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 282.5, "minX": 34.0, "maxY": 656.0, "series": [{"data": [[130.0, 656.0], [34.0, 282.5], [158.0, 444.5], [159.0, 500.0], [171.0, 514.0], [177.0, 399.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 177.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 282.5, "minX": 34.0, "maxY": 656.0, "series": [{"data": [[130.0, 656.0], [34.0, 282.5], [158.0, 444.5], [159.0, 500.0], [171.0, 513.5], [177.0, 399.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 177.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.59101046E12, "maxY": 16.666666666666668, "series": [{"data": [[1.59101046E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101046E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.59101046E12, "maxY": 16.666666666666668, "series": [{"data": [[1.59101046E12, 16.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101046E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.59101046E12, "maxY": 16.666666666666668, "series": [{"data": [[1.59101046E12, 16.666666666666668]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101046E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.59101046E12, "maxY": 16.666666666666668, "series": [{"data": [[1.59101046E12, 16.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101046E12, "title": "Total Transactions Per Second"}},
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

