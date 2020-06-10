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
        data: {"result": {"minY": 100.0, "minX": 0.0, "maxY": 1957.0, "series": [{"data": [[0.0, 100.0], [0.1, 108.0], [0.2, 110.0], [0.3, 110.0], [0.4, 113.0], [0.5, 114.0], [0.6, 118.0], [0.7, 118.0], [0.8, 119.0], [0.9, 120.0], [1.0, 133.0], [1.1, 134.0], [1.2, 134.0], [1.3, 135.0], [1.4, 139.0], [1.5, 149.0], [1.6, 151.0], [1.7, 153.0], [1.8, 153.0], [1.9, 153.0], [2.0, 158.0], [2.1, 160.0], [2.2, 162.0], [2.3, 163.0], [2.4, 165.0], [2.5, 165.0], [2.6, 168.0], [2.7, 168.0], [2.8, 171.0], [2.9, 174.0], [3.0, 177.0], [3.1, 184.0], [3.2, 184.0], [3.3, 185.0], [3.4, 187.0], [3.5, 188.0], [3.6, 189.0], [3.7, 190.0], [3.8, 191.0], [3.9, 192.0], [4.0, 193.0], [4.1, 193.0], [4.2, 195.0], [4.3, 196.0], [4.4, 196.0], [4.5, 196.0], [4.6, 197.0], [4.7, 199.0], [4.8, 199.0], [4.9, 199.0], [5.0, 199.0], [5.1, 201.0], [5.2, 206.0], [5.3, 206.0], [5.4, 207.0], [5.5, 207.0], [5.6, 210.0], [5.7, 214.0], [5.8, 216.0], [5.9, 218.0], [6.0, 220.0], [6.1, 223.0], [6.2, 223.0], [6.3, 223.0], [6.4, 223.0], [6.5, 225.0], [6.6, 225.0], [6.7, 229.0], [6.8, 229.0], [6.9, 230.0], [7.0, 230.0], [7.1, 230.0], [7.2, 234.0], [7.3, 234.0], [7.4, 237.0], [7.5, 237.0], [7.6, 237.0], [7.7, 238.0], [7.8, 238.0], [7.9, 239.0], [8.0, 240.0], [8.1, 241.0], [8.2, 241.0], [8.3, 242.0], [8.4, 243.0], [8.5, 243.0], [8.6, 243.0], [8.7, 243.0], [8.8, 243.0], [8.9, 243.0], [9.0, 244.0], [9.1, 244.0], [9.2, 244.0], [9.3, 245.0], [9.4, 245.0], [9.5, 245.0], [9.6, 245.0], [9.7, 246.0], [9.8, 246.0], [9.9, 246.0], [10.0, 247.0], [10.1, 248.0], [10.2, 249.0], [10.3, 249.0], [10.4, 249.0], [10.5, 250.0], [10.6, 250.0], [10.7, 252.0], [10.8, 252.0], [10.9, 252.0], [11.0, 252.0], [11.1, 252.0], [11.2, 254.0], [11.3, 254.0], [11.4, 254.0], [11.5, 255.0], [11.6, 255.0], [11.7, 256.0], [11.8, 256.0], [11.9, 257.0], [12.0, 257.0], [12.1, 257.0], [12.2, 258.0], [12.3, 258.0], [12.4, 258.0], [12.5, 258.0], [12.6, 259.0], [12.7, 259.0], [12.8, 259.0], [12.9, 259.0], [13.0, 260.0], [13.1, 260.0], [13.2, 260.0], [13.3, 260.0], [13.4, 261.0], [13.5, 261.0], [13.6, 262.0], [13.7, 263.0], [13.8, 263.0], [13.9, 263.0], [14.0, 263.0], [14.1, 264.0], [14.2, 265.0], [14.3, 265.0], [14.4, 265.0], [14.5, 265.0], [14.6, 265.0], [14.7, 265.0], [14.8, 266.0], [14.9, 267.0], [15.0, 267.0], [15.1, 268.0], [15.2, 268.0], [15.3, 268.0], [15.4, 268.0], [15.5, 269.0], [15.6, 269.0], [15.7, 270.0], [15.8, 270.0], [15.9, 272.0], [16.0, 273.0], [16.1, 274.0], [16.2, 274.0], [16.3, 275.0], [16.4, 275.0], [16.5, 276.0], [16.6, 276.0], [16.7, 276.0], [16.8, 277.0], [16.9, 277.0], [17.0, 277.0], [17.1, 277.0], [17.2, 277.0], [17.3, 278.0], [17.4, 278.0], [17.5, 278.0], [17.6, 278.0], [17.7, 279.0], [17.8, 279.0], [17.9, 279.0], [18.0, 279.0], [18.1, 280.0], [18.2, 280.0], [18.3, 280.0], [18.4, 280.0], [18.5, 281.0], [18.6, 281.0], [18.7, 282.0], [18.8, 282.0], [18.9, 282.0], [19.0, 282.0], [19.1, 282.0], [19.2, 282.0], [19.3, 283.0], [19.4, 283.0], [19.5, 283.0], [19.6, 283.0], [19.7, 283.0], [19.8, 283.0], [19.9, 284.0], [20.0, 284.0], [20.1, 284.0], [20.2, 284.0], [20.3, 285.0], [20.4, 285.0], [20.5, 285.0], [20.6, 285.0], [20.7, 286.0], [20.8, 286.0], [20.9, 286.0], [21.0, 287.0], [21.1, 287.0], [21.2, 287.0], [21.3, 288.0], [21.4, 288.0], [21.5, 289.0], [21.6, 289.0], [21.7, 290.0], [21.8, 290.0], [21.9, 290.0], [22.0, 291.0], [22.1, 291.0], [22.2, 292.0], [22.3, 292.0], [22.4, 292.0], [22.5, 292.0], [22.6, 293.0], [22.7, 293.0], [22.8, 293.0], [22.9, 294.0], [23.0, 294.0], [23.1, 294.0], [23.2, 295.0], [23.3, 296.0], [23.4, 296.0], [23.5, 296.0], [23.6, 297.0], [23.7, 297.0], [23.8, 298.0], [23.9, 298.0], [24.0, 298.0], [24.1, 299.0], [24.2, 299.0], [24.3, 300.0], [24.4, 300.0], [24.5, 301.0], [24.6, 301.0], [24.7, 301.0], [24.8, 301.0], [24.9, 301.0], [25.0, 302.0], [25.1, 303.0], [25.2, 303.0], [25.3, 304.0], [25.4, 304.0], [25.5, 305.0], [25.6, 305.0], [25.7, 305.0], [25.8, 305.0], [25.9, 306.0], [26.0, 306.0], [26.1, 306.0], [26.2, 307.0], [26.3, 307.0], [26.4, 307.0], [26.5, 307.0], [26.6, 308.0], [26.7, 308.0], [26.8, 308.0], [26.9, 308.0], [27.0, 308.0], [27.1, 309.0], [27.2, 309.0], [27.3, 309.0], [27.4, 309.0], [27.5, 309.0], [27.6, 310.0], [27.7, 310.0], [27.8, 310.0], [27.9, 310.0], [28.0, 310.0], [28.1, 310.0], [28.2, 310.0], [28.3, 311.0], [28.4, 311.0], [28.5, 311.0], [28.6, 311.0], [28.7, 311.0], [28.8, 311.0], [28.9, 312.0], [29.0, 312.0], [29.1, 312.0], [29.2, 312.0], [29.3, 312.0], [29.4, 313.0], [29.5, 313.0], [29.6, 313.0], [29.7, 313.0], [29.8, 313.0], [29.9, 313.0], [30.0, 314.0], [30.1, 314.0], [30.2, 315.0], [30.3, 315.0], [30.4, 316.0], [30.5, 316.0], [30.6, 316.0], [30.7, 316.0], [30.8, 316.0], [30.9, 317.0], [31.0, 317.0], [31.1, 317.0], [31.2, 317.0], [31.3, 318.0], [31.4, 318.0], [31.5, 318.0], [31.6, 319.0], [31.7, 319.0], [31.8, 319.0], [31.9, 319.0], [32.0, 319.0], [32.1, 319.0], [32.2, 319.0], [32.3, 319.0], [32.4, 320.0], [32.5, 320.0], [32.6, 320.0], [32.7, 321.0], [32.8, 321.0], [32.9, 321.0], [33.0, 321.0], [33.1, 321.0], [33.2, 321.0], [33.3, 321.0], [33.4, 322.0], [33.5, 322.0], [33.6, 322.0], [33.7, 322.0], [33.8, 322.0], [33.9, 322.0], [34.0, 323.0], [34.1, 323.0], [34.2, 323.0], [34.3, 323.0], [34.4, 324.0], [34.5, 324.0], [34.6, 324.0], [34.7, 324.0], [34.8, 324.0], [34.9, 324.0], [35.0, 325.0], [35.1, 326.0], [35.2, 327.0], [35.3, 327.0], [35.4, 327.0], [35.5, 327.0], [35.6, 328.0], [35.7, 328.0], [35.8, 328.0], [35.9, 328.0], [36.0, 328.0], [36.1, 328.0], [36.2, 328.0], [36.3, 329.0], [36.4, 329.0], [36.5, 329.0], [36.6, 330.0], [36.7, 330.0], [36.8, 331.0], [36.9, 332.0], [37.0, 332.0], [37.1, 332.0], [37.2, 332.0], [37.3, 332.0], [37.4, 332.0], [37.5, 332.0], [37.6, 332.0], [37.7, 333.0], [37.8, 333.0], [37.9, 333.0], [38.0, 333.0], [38.1, 333.0], [38.2, 334.0], [38.3, 334.0], [38.4, 334.0], [38.5, 334.0], [38.6, 334.0], [38.7, 334.0], [38.8, 334.0], [38.9, 335.0], [39.0, 335.0], [39.1, 335.0], [39.2, 335.0], [39.3, 336.0], [39.4, 337.0], [39.5, 337.0], [39.6, 338.0], [39.7, 338.0], [39.8, 338.0], [39.9, 338.0], [40.0, 339.0], [40.1, 339.0], [40.2, 339.0], [40.3, 339.0], [40.4, 340.0], [40.5, 340.0], [40.6, 340.0], [40.7, 341.0], [40.8, 342.0], [40.9, 342.0], [41.0, 342.0], [41.1, 342.0], [41.2, 343.0], [41.3, 343.0], [41.4, 344.0], [41.5, 344.0], [41.6, 344.0], [41.7, 344.0], [41.8, 344.0], [41.9, 344.0], [42.0, 345.0], [42.1, 345.0], [42.2, 345.0], [42.3, 345.0], [42.4, 345.0], [42.5, 346.0], [42.6, 346.0], [42.7, 347.0], [42.8, 347.0], [42.9, 347.0], [43.0, 348.0], [43.1, 348.0], [43.2, 348.0], [43.3, 348.0], [43.4, 349.0], [43.5, 349.0], [43.6, 349.0], [43.7, 350.0], [43.8, 350.0], [43.9, 350.0], [44.0, 350.0], [44.1, 350.0], [44.2, 351.0], [44.3, 351.0], [44.4, 351.0], [44.5, 352.0], [44.6, 352.0], [44.7, 353.0], [44.8, 353.0], [44.9, 354.0], [45.0, 354.0], [45.1, 354.0], [45.2, 354.0], [45.3, 355.0], [45.4, 355.0], [45.5, 355.0], [45.6, 355.0], [45.7, 356.0], [45.8, 356.0], [45.9, 356.0], [46.0, 356.0], [46.1, 356.0], [46.2, 357.0], [46.3, 357.0], [46.4, 357.0], [46.5, 358.0], [46.6, 358.0], [46.7, 359.0], [46.8, 359.0], [46.9, 359.0], [47.0, 360.0], [47.1, 360.0], [47.2, 360.0], [47.3, 360.0], [47.4, 360.0], [47.5, 361.0], [47.6, 361.0], [47.7, 362.0], [47.8, 363.0], [47.9, 363.0], [48.0, 363.0], [48.1, 364.0], [48.2, 364.0], [48.3, 364.0], [48.4, 364.0], [48.5, 365.0], [48.6, 365.0], [48.7, 366.0], [48.8, 366.0], [48.9, 366.0], [49.0, 366.0], [49.1, 366.0], [49.2, 367.0], [49.3, 367.0], [49.4, 367.0], [49.5, 367.0], [49.6, 367.0], [49.7, 367.0], [49.8, 367.0], [49.9, 368.0], [50.0, 368.0], [50.1, 368.0], [50.2, 368.0], [50.3, 368.0], [50.4, 368.0], [50.5, 369.0], [50.6, 370.0], [50.7, 370.0], [50.8, 371.0], [50.9, 371.0], [51.0, 371.0], [51.1, 372.0], [51.2, 372.0], [51.3, 372.0], [51.4, 372.0], [51.5, 372.0], [51.6, 373.0], [51.7, 373.0], [51.8, 373.0], [51.9, 373.0], [52.0, 373.0], [52.1, 373.0], [52.2, 374.0], [52.3, 374.0], [52.4, 375.0], [52.5, 375.0], [52.6, 375.0], [52.7, 375.0], [52.8, 376.0], [52.9, 377.0], [53.0, 377.0], [53.1, 377.0], [53.2, 378.0], [53.3, 378.0], [53.4, 378.0], [53.5, 379.0], [53.6, 379.0], [53.7, 380.0], [53.8, 380.0], [53.9, 380.0], [54.0, 380.0], [54.1, 380.0], [54.2, 381.0], [54.3, 381.0], [54.4, 381.0], [54.5, 382.0], [54.6, 382.0], [54.7, 382.0], [54.8, 382.0], [54.9, 383.0], [55.0, 383.0], [55.1, 383.0], [55.2, 383.0], [55.3, 383.0], [55.4, 384.0], [55.5, 384.0], [55.6, 385.0], [55.7, 385.0], [55.8, 386.0], [55.9, 386.0], [56.0, 386.0], [56.1, 387.0], [56.2, 387.0], [56.3, 387.0], [56.4, 388.0], [56.5, 388.0], [56.6, 388.0], [56.7, 388.0], [56.8, 388.0], [56.9, 389.0], [57.0, 389.0], [57.1, 389.0], [57.2, 389.0], [57.3, 389.0], [57.4, 390.0], [57.5, 390.0], [57.6, 390.0], [57.7, 391.0], [57.8, 391.0], [57.9, 391.0], [58.0, 391.0], [58.1, 392.0], [58.2, 393.0], [58.3, 393.0], [58.4, 394.0], [58.5, 395.0], [58.6, 395.0], [58.7, 395.0], [58.8, 395.0], [58.9, 397.0], [59.0, 397.0], [59.1, 397.0], [59.2, 397.0], [59.3, 397.0], [59.4, 398.0], [59.5, 398.0], [59.6, 399.0], [59.7, 399.0], [59.8, 399.0], [59.9, 400.0], [60.0, 401.0], [60.1, 402.0], [60.2, 402.0], [60.3, 402.0], [60.4, 403.0], [60.5, 403.0], [60.6, 403.0], [60.7, 404.0], [60.8, 404.0], [60.9, 404.0], [61.0, 404.0], [61.1, 405.0], [61.2, 405.0], [61.3, 405.0], [61.4, 406.0], [61.5, 406.0], [61.6, 407.0], [61.7, 407.0], [61.8, 407.0], [61.9, 407.0], [62.0, 407.0], [62.1, 407.0], [62.2, 408.0], [62.3, 408.0], [62.4, 408.0], [62.5, 409.0], [62.6, 409.0], [62.7, 409.0], [62.8, 409.0], [62.9, 409.0], [63.0, 410.0], [63.1, 411.0], [63.2, 411.0], [63.3, 412.0], [63.4, 412.0], [63.5, 412.0], [63.6, 412.0], [63.7, 412.0], [63.8, 413.0], [63.9, 413.0], [64.0, 415.0], [64.1, 416.0], [64.2, 416.0], [64.3, 416.0], [64.4, 418.0], [64.5, 418.0], [64.6, 418.0], [64.7, 419.0], [64.8, 420.0], [64.9, 421.0], [65.0, 421.0], [65.1, 422.0], [65.2, 423.0], [65.3, 423.0], [65.4, 423.0], [65.5, 423.0], [65.6, 424.0], [65.7, 424.0], [65.8, 424.0], [65.9, 425.0], [66.0, 425.0], [66.1, 425.0], [66.2, 426.0], [66.3, 426.0], [66.4, 426.0], [66.5, 426.0], [66.6, 427.0], [66.7, 427.0], [66.8, 428.0], [66.9, 428.0], [67.0, 429.0], [67.1, 429.0], [67.2, 429.0], [67.3, 429.0], [67.4, 429.0], [67.5, 430.0], [67.6, 430.0], [67.7, 430.0], [67.8, 431.0], [67.9, 431.0], [68.0, 431.0], [68.1, 432.0], [68.2, 432.0], [68.3, 432.0], [68.4, 433.0], [68.5, 434.0], [68.6, 434.0], [68.7, 435.0], [68.8, 435.0], [68.9, 436.0], [69.0, 437.0], [69.1, 438.0], [69.2, 438.0], [69.3, 438.0], [69.4, 438.0], [69.5, 438.0], [69.6, 438.0], [69.7, 439.0], [69.8, 439.0], [69.9, 439.0], [70.0, 440.0], [70.1, 441.0], [70.2, 441.0], [70.3, 441.0], [70.4, 441.0], [70.5, 442.0], [70.6, 443.0], [70.7, 443.0], [70.8, 443.0], [70.9, 444.0], [71.0, 445.0], [71.1, 446.0], [71.2, 446.0], [71.3, 446.0], [71.4, 447.0], [71.5, 447.0], [71.6, 449.0], [71.7, 449.0], [71.8, 449.0], [71.9, 450.0], [72.0, 450.0], [72.1, 451.0], [72.2, 451.0], [72.3, 452.0], [72.4, 453.0], [72.5, 454.0], [72.6, 455.0], [72.7, 456.0], [72.8, 457.0], [72.9, 457.0], [73.0, 458.0], [73.1, 458.0], [73.2, 459.0], [73.3, 459.0], [73.4, 460.0], [73.5, 461.0], [73.6, 461.0], [73.7, 462.0], [73.8, 462.0], [73.9, 462.0], [74.0, 463.0], [74.1, 463.0], [74.2, 464.0], [74.3, 464.0], [74.4, 464.0], [74.5, 465.0], [74.6, 465.0], [74.7, 467.0], [74.8, 468.0], [74.9, 468.0], [75.0, 468.0], [75.1, 468.0], [75.2, 469.0], [75.3, 470.0], [75.4, 471.0], [75.5, 471.0], [75.6, 471.0], [75.7, 472.0], [75.8, 472.0], [75.9, 473.0], [76.0, 473.0], [76.1, 473.0], [76.2, 474.0], [76.3, 474.0], [76.4, 474.0], [76.5, 475.0], [76.6, 476.0], [76.7, 476.0], [76.8, 477.0], [76.9, 478.0], [77.0, 478.0], [77.1, 479.0], [77.2, 480.0], [77.3, 480.0], [77.4, 481.0], [77.5, 481.0], [77.6, 481.0], [77.7, 481.0], [77.8, 482.0], [77.9, 483.0], [78.0, 484.0], [78.1, 484.0], [78.2, 484.0], [78.3, 485.0], [78.4, 486.0], [78.5, 486.0], [78.6, 486.0], [78.7, 487.0], [78.8, 487.0], [78.9, 487.0], [79.0, 487.0], [79.1, 488.0], [79.2, 488.0], [79.3, 490.0], [79.4, 490.0], [79.5, 490.0], [79.6, 491.0], [79.7, 491.0], [79.8, 492.0], [79.9, 493.0], [80.0, 494.0], [80.1, 495.0], [80.2, 495.0], [80.3, 495.0], [80.4, 496.0], [80.5, 496.0], [80.6, 496.0], [80.7, 497.0], [80.8, 497.0], [80.9, 497.0], [81.0, 498.0], [81.1, 498.0], [81.2, 499.0], [81.3, 499.0], [81.4, 500.0], [81.5, 501.0], [81.6, 502.0], [81.7, 503.0], [81.8, 504.0], [81.9, 504.0], [82.0, 505.0], [82.1, 505.0], [82.2, 507.0], [82.3, 507.0], [82.4, 508.0], [82.5, 508.0], [82.6, 509.0], [82.7, 511.0], [82.8, 512.0], [82.9, 515.0], [83.0, 516.0], [83.1, 516.0], [83.2, 516.0], [83.3, 517.0], [83.4, 518.0], [83.5, 518.0], [83.6, 520.0], [83.7, 521.0], [83.8, 522.0], [83.9, 523.0], [84.0, 523.0], [84.1, 524.0], [84.2, 524.0], [84.3, 524.0], [84.4, 525.0], [84.5, 525.0], [84.6, 526.0], [84.7, 527.0], [84.8, 527.0], [84.9, 528.0], [85.0, 528.0], [85.1, 529.0], [85.2, 530.0], [85.3, 531.0], [85.4, 531.0], [85.5, 533.0], [85.6, 533.0], [85.7, 535.0], [85.8, 536.0], [85.9, 536.0], [86.0, 537.0], [86.1, 537.0], [86.2, 538.0], [86.3, 538.0], [86.4, 538.0], [86.5, 538.0], [86.6, 539.0], [86.7, 542.0], [86.8, 542.0], [86.9, 547.0], [87.0, 547.0], [87.1, 550.0], [87.2, 551.0], [87.3, 554.0], [87.4, 554.0], [87.5, 555.0], [87.6, 557.0], [87.7, 557.0], [87.8, 558.0], [87.9, 559.0], [88.0, 559.0], [88.1, 560.0], [88.2, 563.0], [88.3, 563.0], [88.4, 564.0], [88.5, 566.0], [88.6, 566.0], [88.7, 568.0], [88.8, 568.0], [88.9, 569.0], [89.0, 571.0], [89.1, 571.0], [89.2, 572.0], [89.3, 572.0], [89.4, 572.0], [89.5, 572.0], [89.6, 572.0], [89.7, 573.0], [89.8, 573.0], [89.9, 574.0], [90.0, 575.0], [90.1, 577.0], [90.2, 577.0], [90.3, 577.0], [90.4, 578.0], [90.5, 581.0], [90.6, 582.0], [90.7, 586.0], [90.8, 587.0], [90.9, 590.0], [91.0, 593.0], [91.1, 593.0], [91.2, 595.0], [91.3, 597.0], [91.4, 603.0], [91.5, 604.0], [91.6, 608.0], [91.7, 612.0], [91.8, 613.0], [91.9, 615.0], [92.0, 615.0], [92.1, 616.0], [92.2, 623.0], [92.3, 625.0], [92.4, 630.0], [92.5, 633.0], [92.6, 636.0], [92.7, 641.0], [92.8, 642.0], [92.9, 643.0], [93.0, 644.0], [93.1, 645.0], [93.2, 652.0], [93.3, 657.0], [93.4, 657.0], [93.5, 659.0], [93.6, 660.0], [93.7, 663.0], [93.8, 663.0], [93.9, 663.0], [94.0, 668.0], [94.1, 669.0], [94.2, 677.0], [94.3, 678.0], [94.4, 681.0], [94.5, 686.0], [94.6, 691.0], [94.7, 691.0], [94.8, 709.0], [94.9, 713.0], [95.0, 731.0], [95.1, 731.0], [95.2, 732.0], [95.3, 736.0], [95.4, 769.0], [95.5, 772.0], [95.6, 795.0], [95.7, 795.0], [95.8, 809.0], [95.9, 835.0], [96.0, 861.0], [96.1, 1333.0], [96.2, 1338.0], [96.3, 1343.0], [96.4, 1348.0], [96.5, 1357.0], [96.6, 1366.0], [96.7, 1373.0], [96.8, 1379.0], [96.9, 1382.0], [97.0, 1383.0], [97.1, 1388.0], [97.2, 1394.0], [97.3, 1395.0], [97.4, 1397.0], [97.5, 1405.0], [97.6, 1406.0], [97.7, 1408.0], [97.8, 1411.0], [97.9, 1417.0], [98.0, 1430.0], [98.1, 1435.0], [98.2, 1445.0], [98.3, 1451.0], [98.4, 1467.0], [98.5, 1484.0], [98.6, 1485.0], [98.7, 1494.0], [98.8, 1496.0], [98.9, 1512.0], [99.0, 1515.0], [99.1, 1559.0], [99.2, 1630.0], [99.3, 1656.0], [99.4, 1657.0], [99.5, 1679.0], [99.6, 1699.0], [99.7, 1701.0], [99.8, 1890.0], [99.9, 1957.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 356.0, "series": [{"data": [[600.0, 34.0], [700.0, 10.0], [200.0, 193.0], [800.0, 3.0], [300.0, 356.0], [1300.0, 14.0], [1400.0, 14.0], [1500.0, 3.0], [100.0, 50.0], [400.0, 215.0], [1600.0, 5.0], [1700.0, 1.0], [1800.0, 1.0], [1900.0, 1.0], [500.0, 100.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 11.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 815.0, "series": [{"data": [[0.0, 815.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 174.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 11.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 71.61800000000008, "minX": 1.59101124E12, "maxY": 71.61800000000008, "series": [{"data": [[1.59101124E12, 71.61800000000008]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101124E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 176.71428571428572, "minX": 1.0, "maxY": 926.6666666666666, "series": [{"data": [[2.0, 323.0], [3.0, 309.0], [4.0, 310.0], [5.0, 321.0], [6.0, 426.0], [7.0, 314.0], [8.0, 317.0], [9.0, 308.0], [10.0, 363.0], [11.0, 386.0], [12.0, 354.0], [13.0, 349.0], [14.0, 363.0], [15.0, 405.0], [16.0, 348.0], [17.0, 335.0], [18.0, 413.0], [19.0, 188.75], [20.0, 186.75], [21.0, 176.71428571428572], [22.0, 266.5], [23.0, 261.0], [24.0, 206.57142857142856], [25.0, 220.2], [26.0, 296.0], [27.0, 192.0], [28.0, 370.5], [29.0, 375.0], [30.0, 300.0], [31.0, 394.5], [33.0, 241.0], [32.0, 304.5], [35.0, 251.5], [34.0, 295.5], [37.0, 248.0], [36.0, 231.33333333333334], [39.0, 308.5], [38.0, 274.6666666666667], [41.0, 217.66666666666666], [40.0, 282.5], [43.0, 306.3333333333333], [42.0, 296.4], [45.0, 320.3333333333333], [44.0, 275.25], [47.0, 320.58333333333337], [46.0, 348.375], [49.0, 373.6666666666667], [48.0, 345.25], [51.0, 326.8947368421053], [50.0, 411.93333333333334], [53.0, 333.99999999999994], [52.0, 301.9444444444445], [55.0, 311.49999999999994], [54.0, 317.3846153846154], [57.0, 353.85714285714283], [56.0, 339.7777777777777], [59.0, 341.55000000000007], [58.0, 337.1363636363637], [61.0, 396.27272727272725], [60.0, 419.0769230769231], [63.0, 443.7428571428571], [62.0, 392.1333333333333], [67.0, 462.76190476190476], [66.0, 430.47368421052636], [65.0, 426.9090909090909], [64.0, 421.50000000000006], [71.0, 432.56250000000006], [70.0, 481.2727272727272], [69.0, 428.66666666666663], [68.0, 343.91666666666674], [75.0, 565.6363636363636], [74.0, 404.64285714285717], [73.0, 573.6666666666666], [72.0, 500.1666666666667], [79.0, 602.0], [78.0, 605.3], [77.0, 674.8571428571428], [76.0, 559.4285714285714], [83.0, 474.59999999999997], [82.0, 688.6666666666667], [81.0, 513.0], [80.0, 607.5454545454544], [86.0, 615.0], [85.0, 726.0], [84.0, 406.88888888888886], [87.0, 486.6], [91.0, 482.09999999999997], [89.0, 664.3333333333334], [90.0, 564.5714285714286], [88.0, 926.6666666666666], [95.0, 416.1666666666667], [94.0, 575.875], [93.0, 476.4], [92.0, 525.6], [96.0, 374.0], [103.0, 505.5], [102.0, 454.3333333333333], [101.0, 450.0], [100.0, 477.0], [107.0, 517.0], [106.0, 531.0], [105.0, 415.9], [111.0, 426.5], [110.0, 534.5], [109.0, 496.75], [108.0, 392.5], [115.0, 527.0], [114.0, 623.0], [113.0, 475.75], [112.0, 423.8], [118.0, 348.1111111111111], [119.0, 563.0], [117.0, 549.3333333333334], [116.0, 582.2857142857142], [123.0, 513.3333333333334], [122.0, 483.0], [121.0, 558.25], [120.0, 548.0], [127.0, 348.6666666666667], [126.0, 426.4], [125.0, 420.0], [124.0, 495.3333333333333], [135.0, 564.3333333333334], [134.0, 466.7142857142857], [131.0, 394.2857142857143], [130.0, 377.0], [129.0, 372.0], [128.0, 403.0], [132.0, 427.6666666666667], [133.0, 534.1], [136.0, 514.4545454545455], [139.0, 270.5], [138.0, 296.5], [137.0, 487.4], [1.0, 319.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[71.61700000000006, 422.5870000000002]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 139.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3350.0, "minX": 1.59101124E12, "maxY": 4300.0, "series": [{"data": [[1.59101124E12, 3350.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.59101124E12, 4300.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101124E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 422.5870000000002, "minX": 1.59101124E12, "maxY": 422.5870000000002, "series": [{"data": [[1.59101124E12, 422.5870000000002]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101124E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 422.305, "minX": 1.59101124E12, "maxY": 422.305, "series": [{"data": [[1.59101124E12, 422.305]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101124E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 42.44700000000003, "minX": 1.59101124E12, "maxY": 42.44700000000003, "series": [{"data": [[1.59101124E12, 42.44700000000003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101124E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 100.0, "minX": 1.59101124E12, "maxY": 1957.0, "series": [{"data": [[1.59101124E12, 1957.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.59101124E12, 119.008999761343]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.59101124E12, 119.9099000954628]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.59101124E12, 119.5094998806715]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.59101124E12, 100.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.59101124E12, 368.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101124E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 277.0, "minX": 139.0, "maxY": 473.0, "series": [{"data": [[139.0, 473.0], [156.0, 375.0], [159.0, 277.0], [167.0, 330.0], [186.0, 460.5], [193.0, 371.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 193.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 277.0, "minX": 139.0, "maxY": 473.0, "series": [{"data": [[139.0, 473.0], [156.0, 375.0], [159.0, 277.0], [167.0, 330.0], [186.0, 456.0], [193.0, 371.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 193.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.59101124E12, "maxY": 16.666666666666668, "series": [{"data": [[1.59101124E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101124E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.59101124E12, "maxY": 16.666666666666668, "series": [{"data": [[1.59101124E12, 16.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101124E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.59101124E12, "maxY": 16.666666666666668, "series": [{"data": [[1.59101124E12, 16.666666666666668]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101124E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.59101124E12, "maxY": 16.666666666666668, "series": [{"data": [[1.59101124E12, 16.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101124E12, "title": "Total Transactions Per Second"}},
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

