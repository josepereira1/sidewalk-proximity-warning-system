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
        data: {"result": {"minY": 137.0, "minX": 0.0, "maxY": 6549.0, "series": [{"data": [[0.0, 137.0], [0.1, 151.0], [0.2, 153.0], [0.3, 153.0], [0.4, 159.0], [0.5, 160.0], [0.6, 161.0], [0.7, 162.0], [0.8, 163.0], [0.9, 164.0], [1.0, 166.0], [1.1, 166.0], [1.2, 170.0], [1.3, 171.0], [1.4, 171.0], [1.5, 174.0], [1.6, 175.0], [1.7, 175.0], [1.8, 176.0], [1.9, 176.0], [2.0, 177.0], [2.1, 177.0], [2.2, 180.0], [2.3, 180.0], [2.4, 180.0], [2.5, 181.0], [2.6, 182.0], [2.7, 182.0], [2.8, 182.0], [2.9, 183.0], [3.0, 184.0], [3.1, 187.0], [3.2, 187.0], [3.3, 188.0], [3.4, 188.0], [3.5, 189.0], [3.6, 189.0], [3.7, 189.0], [3.8, 190.0], [3.9, 190.0], [4.0, 190.0], [4.1, 190.0], [4.2, 191.0], [4.3, 191.0], [4.4, 193.0], [4.5, 193.0], [4.6, 193.0], [4.7, 194.0], [4.8, 196.0], [4.9, 198.0], [5.0, 198.0], [5.1, 198.0], [5.2, 198.0], [5.3, 199.0], [5.4, 199.0], [5.5, 200.0], [5.6, 200.0], [5.7, 200.0], [5.8, 200.0], [5.9, 201.0], [6.0, 201.0], [6.1, 201.0], [6.2, 201.0], [6.3, 201.0], [6.4, 202.0], [6.5, 202.0], [6.6, 202.0], [6.7, 202.0], [6.8, 202.0], [6.9, 204.0], [7.0, 204.0], [7.1, 204.0], [7.2, 205.0], [7.3, 205.0], [7.4, 205.0], [7.5, 206.0], [7.6, 206.0], [7.7, 207.0], [7.8, 207.0], [7.9, 207.0], [8.0, 208.0], [8.1, 209.0], [8.2, 209.0], [8.3, 210.0], [8.4, 211.0], [8.5, 211.0], [8.6, 211.0], [8.7, 212.0], [8.8, 212.0], [8.9, 213.0], [9.0, 213.0], [9.1, 213.0], [9.2, 213.0], [9.3, 214.0], [9.4, 214.0], [9.5, 216.0], [9.6, 216.0], [9.7, 216.0], [9.8, 216.0], [9.9, 217.0], [10.0, 218.0], [10.1, 218.0], [10.2, 219.0], [10.3, 219.0], [10.4, 219.0], [10.5, 219.0], [10.6, 220.0], [10.7, 220.0], [10.8, 221.0], [10.9, 221.0], [11.0, 221.0], [11.1, 221.0], [11.2, 221.0], [11.3, 222.0], [11.4, 222.0], [11.5, 222.0], [11.6, 223.0], [11.7, 224.0], [11.8, 224.0], [11.9, 224.0], [12.0, 225.0], [12.1, 225.0], [12.2, 225.0], [12.3, 225.0], [12.4, 225.0], [12.5, 225.0], [12.6, 226.0], [12.7, 226.0], [12.8, 226.0], [12.9, 226.0], [13.0, 227.0], [13.1, 227.0], [13.2, 227.0], [13.3, 227.0], [13.4, 229.0], [13.5, 229.0], [13.6, 229.0], [13.7, 229.0], [13.8, 229.0], [13.9, 229.0], [14.0, 229.0], [14.1, 230.0], [14.2, 230.0], [14.3, 230.0], [14.4, 230.0], [14.5, 231.0], [14.6, 231.0], [14.7, 232.0], [14.8, 232.0], [14.9, 233.0], [15.0, 233.0], [15.1, 234.0], [15.2, 234.0], [15.3, 234.0], [15.4, 235.0], [15.5, 235.0], [15.6, 235.0], [15.7, 235.0], [15.8, 236.0], [15.9, 236.0], [16.0, 236.0], [16.1, 236.0], [16.2, 237.0], [16.3, 237.0], [16.4, 238.0], [16.5, 238.0], [16.6, 238.0], [16.7, 238.0], [16.8, 238.0], [16.9, 238.0], [17.0, 238.0], [17.1, 239.0], [17.2, 239.0], [17.3, 239.0], [17.4, 240.0], [17.5, 240.0], [17.6, 241.0], [17.7, 241.0], [17.8, 241.0], [17.9, 241.0], [18.0, 241.0], [18.1, 241.0], [18.2, 242.0], [18.3, 243.0], [18.4, 243.0], [18.5, 243.0], [18.6, 243.0], [18.7, 243.0], [18.8, 243.0], [18.9, 244.0], [19.0, 244.0], [19.1, 244.0], [19.2, 244.0], [19.3, 244.0], [19.4, 244.0], [19.5, 245.0], [19.6, 245.0], [19.7, 245.0], [19.8, 246.0], [19.9, 246.0], [20.0, 246.0], [20.1, 246.0], [20.2, 247.0], [20.3, 247.0], [20.4, 247.0], [20.5, 247.0], [20.6, 248.0], [20.7, 248.0], [20.8, 248.0], [20.9, 248.0], [21.0, 249.0], [21.1, 249.0], [21.2, 249.0], [21.3, 249.0], [21.4, 249.0], [21.5, 249.0], [21.6, 250.0], [21.7, 250.0], [21.8, 250.0], [21.9, 251.0], [22.0, 251.0], [22.1, 251.0], [22.2, 252.0], [22.3, 252.0], [22.4, 252.0], [22.5, 252.0], [22.6, 252.0], [22.7, 254.0], [22.8, 254.0], [22.9, 255.0], [23.0, 255.0], [23.1, 255.0], [23.2, 255.0], [23.3, 255.0], [23.4, 255.0], [23.5, 255.0], [23.6, 255.0], [23.7, 256.0], [23.8, 256.0], [23.9, 256.0], [24.0, 256.0], [24.1, 256.0], [24.2, 257.0], [24.3, 257.0], [24.4, 257.0], [24.5, 257.0], [24.6, 257.0], [24.7, 258.0], [24.8, 258.0], [24.9, 258.0], [25.0, 259.0], [25.1, 259.0], [25.2, 260.0], [25.3, 260.0], [25.4, 260.0], [25.5, 260.0], [25.6, 260.0], [25.7, 260.0], [25.8, 261.0], [25.9, 261.0], [26.0, 261.0], [26.1, 262.0], [26.2, 262.0], [26.3, 262.0], [26.4, 262.0], [26.5, 262.0], [26.6, 263.0], [26.7, 263.0], [26.8, 263.0], [26.9, 263.0], [27.0, 264.0], [27.1, 264.0], [27.2, 264.0], [27.3, 265.0], [27.4, 265.0], [27.5, 266.0], [27.6, 266.0], [27.7, 266.0], [27.8, 266.0], [27.9, 266.0], [28.0, 267.0], [28.1, 267.0], [28.2, 267.0], [28.3, 267.0], [28.4, 267.0], [28.5, 267.0], [28.6, 268.0], [28.7, 268.0], [28.8, 268.0], [28.9, 268.0], [29.0, 269.0], [29.1, 269.0], [29.2, 270.0], [29.3, 270.0], [29.4, 270.0], [29.5, 270.0], [29.6, 270.0], [29.7, 271.0], [29.8, 271.0], [29.9, 271.0], [30.0, 271.0], [30.1, 271.0], [30.2, 271.0], [30.3, 271.0], [30.4, 271.0], [30.5, 271.0], [30.6, 271.0], [30.7, 272.0], [30.8, 272.0], [30.9, 272.0], [31.0, 273.0], [31.1, 273.0], [31.2, 273.0], [31.3, 273.0], [31.4, 273.0], [31.5, 273.0], [31.6, 274.0], [31.7, 274.0], [31.8, 274.0], [31.9, 274.0], [32.0, 276.0], [32.1, 276.0], [32.2, 276.0], [32.3, 276.0], [32.4, 276.0], [32.5, 276.0], [32.6, 276.0], [32.7, 277.0], [32.8, 277.0], [32.9, 277.0], [33.0, 278.0], [33.1, 278.0], [33.2, 278.0], [33.3, 278.0], [33.4, 279.0], [33.5, 279.0], [33.6, 279.0], [33.7, 280.0], [33.8, 280.0], [33.9, 280.0], [34.0, 280.0], [34.1, 281.0], [34.2, 281.0], [34.3, 281.0], [34.4, 281.0], [34.5, 282.0], [34.6, 283.0], [34.7, 283.0], [34.8, 283.0], [34.9, 283.0], [35.0, 284.0], [35.1, 285.0], [35.2, 285.0], [35.3, 285.0], [35.4, 285.0], [35.5, 285.0], [35.6, 285.0], [35.7, 285.0], [35.8, 286.0], [35.9, 286.0], [36.0, 286.0], [36.1, 286.0], [36.2, 286.0], [36.3, 287.0], [36.4, 287.0], [36.5, 287.0], [36.6, 287.0], [36.7, 287.0], [36.8, 287.0], [36.9, 287.0], [37.0, 287.0], [37.1, 288.0], [37.2, 288.0], [37.3, 288.0], [37.4, 288.0], [37.5, 288.0], [37.6, 289.0], [37.7, 289.0], [37.8, 289.0], [37.9, 289.0], [38.0, 289.0], [38.1, 289.0], [38.2, 289.0], [38.3, 290.0], [38.4, 290.0], [38.5, 290.0], [38.6, 290.0], [38.7, 290.0], [38.8, 290.0], [38.9, 290.0], [39.0, 291.0], [39.1, 291.0], [39.2, 291.0], [39.3, 291.0], [39.4, 291.0], [39.5, 291.0], [39.6, 292.0], [39.7, 292.0], [39.8, 292.0], [39.9, 293.0], [40.0, 293.0], [40.1, 294.0], [40.2, 294.0], [40.3, 294.0], [40.4, 294.0], [40.5, 294.0], [40.6, 294.0], [40.7, 295.0], [40.8, 295.0], [40.9, 295.0], [41.0, 295.0], [41.1, 295.0], [41.2, 295.0], [41.3, 295.0], [41.4, 295.0], [41.5, 296.0], [41.6, 296.0], [41.7, 296.0], [41.8, 296.0], [41.9, 296.0], [42.0, 296.0], [42.1, 296.0], [42.2, 296.0], [42.3, 296.0], [42.4, 296.0], [42.5, 296.0], [42.6, 297.0], [42.7, 297.0], [42.8, 297.0], [42.9, 297.0], [43.0, 297.0], [43.1, 297.0], [43.2, 297.0], [43.3, 297.0], [43.4, 298.0], [43.5, 298.0], [43.6, 298.0], [43.7, 299.0], [43.8, 299.0], [43.9, 299.0], [44.0, 299.0], [44.1, 299.0], [44.2, 299.0], [44.3, 299.0], [44.4, 300.0], [44.5, 300.0], [44.6, 301.0], [44.7, 301.0], [44.8, 301.0], [44.9, 301.0], [45.0, 301.0], [45.1, 301.0], [45.2, 301.0], [45.3, 301.0], [45.4, 301.0], [45.5, 301.0], [45.6, 302.0], [45.7, 302.0], [45.8, 302.0], [45.9, 303.0], [46.0, 303.0], [46.1, 304.0], [46.2, 304.0], [46.3, 304.0], [46.4, 304.0], [46.5, 305.0], [46.6, 305.0], [46.7, 305.0], [46.8, 305.0], [46.9, 305.0], [47.0, 305.0], [47.1, 305.0], [47.2, 305.0], [47.3, 306.0], [47.4, 306.0], [47.5, 306.0], [47.6, 306.0], [47.7, 306.0], [47.8, 307.0], [47.9, 307.0], [48.0, 307.0], [48.1, 308.0], [48.2, 308.0], [48.3, 309.0], [48.4, 309.0], [48.5, 309.0], [48.6, 309.0], [48.7, 310.0], [48.8, 310.0], [48.9, 310.0], [49.0, 310.0], [49.1, 310.0], [49.2, 310.0], [49.3, 310.0], [49.4, 310.0], [49.5, 310.0], [49.6, 310.0], [49.7, 311.0], [49.8, 311.0], [49.9, 311.0], [50.0, 311.0], [50.1, 311.0], [50.2, 311.0], [50.3, 311.0], [50.4, 312.0], [50.5, 312.0], [50.6, 313.0], [50.7, 313.0], [50.8, 313.0], [50.9, 313.0], [51.0, 314.0], [51.1, 314.0], [51.2, 314.0], [51.3, 314.0], [51.4, 315.0], [51.5, 315.0], [51.6, 315.0], [51.7, 315.0], [51.8, 316.0], [51.9, 316.0], [52.0, 316.0], [52.1, 316.0], [52.2, 317.0], [52.3, 317.0], [52.4, 317.0], [52.5, 317.0], [52.6, 317.0], [52.7, 317.0], [52.8, 317.0], [52.9, 317.0], [53.0, 318.0], [53.1, 318.0], [53.2, 318.0], [53.3, 318.0], [53.4, 318.0], [53.5, 318.0], [53.6, 318.0], [53.7, 318.0], [53.8, 318.0], [53.9, 318.0], [54.0, 319.0], [54.1, 319.0], [54.2, 319.0], [54.3, 319.0], [54.4, 319.0], [54.5, 319.0], [54.6, 319.0], [54.7, 320.0], [54.8, 320.0], [54.9, 320.0], [55.0, 320.0], [55.1, 320.0], [55.2, 320.0], [55.3, 320.0], [55.4, 321.0], [55.5, 321.0], [55.6, 321.0], [55.7, 321.0], [55.8, 321.0], [55.9, 321.0], [56.0, 321.0], [56.1, 321.0], [56.2, 322.0], [56.3, 322.0], [56.4, 322.0], [56.5, 322.0], [56.6, 323.0], [56.7, 323.0], [56.8, 323.0], [56.9, 323.0], [57.0, 323.0], [57.1, 324.0], [57.2, 324.0], [57.3, 324.0], [57.4, 325.0], [57.5, 325.0], [57.6, 325.0], [57.7, 325.0], [57.8, 325.0], [57.9, 326.0], [58.0, 326.0], [58.1, 327.0], [58.2, 327.0], [58.3, 327.0], [58.4, 327.0], [58.5, 327.0], [58.6, 327.0], [58.7, 328.0], [58.8, 328.0], [58.9, 329.0], [59.0, 329.0], [59.1, 329.0], [59.2, 329.0], [59.3, 329.0], [59.4, 330.0], [59.5, 330.0], [59.6, 330.0], [59.7, 330.0], [59.8, 330.0], [59.9, 330.0], [60.0, 331.0], [60.1, 331.0], [60.2, 331.0], [60.3, 331.0], [60.4, 331.0], [60.5, 332.0], [60.6, 332.0], [60.7, 332.0], [60.8, 333.0], [60.9, 333.0], [61.0, 333.0], [61.1, 333.0], [61.2, 334.0], [61.3, 334.0], [61.4, 335.0], [61.5, 335.0], [61.6, 335.0], [61.7, 335.0], [61.8, 335.0], [61.9, 335.0], [62.0, 336.0], [62.1, 336.0], [62.2, 337.0], [62.3, 337.0], [62.4, 337.0], [62.5, 338.0], [62.6, 338.0], [62.7, 338.0], [62.8, 338.0], [62.9, 338.0], [63.0, 338.0], [63.1, 338.0], [63.2, 340.0], [63.3, 340.0], [63.4, 340.0], [63.5, 340.0], [63.6, 341.0], [63.7, 341.0], [63.8, 341.0], [63.9, 342.0], [64.0, 343.0], [64.1, 343.0], [64.2, 343.0], [64.3, 343.0], [64.4, 343.0], [64.5, 343.0], [64.6, 343.0], [64.7, 344.0], [64.8, 344.0], [64.9, 344.0], [65.0, 344.0], [65.1, 344.0], [65.2, 344.0], [65.3, 344.0], [65.4, 345.0], [65.5, 345.0], [65.6, 345.0], [65.7, 345.0], [65.8, 345.0], [65.9, 345.0], [66.0, 345.0], [66.1, 345.0], [66.2, 346.0], [66.3, 346.0], [66.4, 347.0], [66.5, 347.0], [66.6, 347.0], [66.7, 347.0], [66.8, 347.0], [66.9, 347.0], [67.0, 347.0], [67.1, 347.0], [67.2, 348.0], [67.3, 348.0], [67.4, 349.0], [67.5, 349.0], [67.6, 349.0], [67.7, 349.0], [67.8, 349.0], [67.9, 350.0], [68.0, 350.0], [68.1, 350.0], [68.2, 350.0], [68.3, 350.0], [68.4, 350.0], [68.5, 351.0], [68.6, 352.0], [68.7, 352.0], [68.8, 352.0], [68.9, 353.0], [69.0, 353.0], [69.1, 353.0], [69.2, 354.0], [69.3, 354.0], [69.4, 354.0], [69.5, 354.0], [69.6, 354.0], [69.7, 354.0], [69.8, 355.0], [69.9, 355.0], [70.0, 356.0], [70.1, 356.0], [70.2, 356.0], [70.3, 356.0], [70.4, 356.0], [70.5, 356.0], [70.6, 356.0], [70.7, 356.0], [70.8, 357.0], [70.9, 357.0], [71.0, 357.0], [71.1, 357.0], [71.2, 357.0], [71.3, 358.0], [71.4, 358.0], [71.5, 358.0], [71.6, 358.0], [71.7, 359.0], [71.8, 360.0], [71.9, 360.0], [72.0, 360.0], [72.1, 361.0], [72.2, 361.0], [72.3, 362.0], [72.4, 362.0], [72.5, 363.0], [72.6, 364.0], [72.7, 364.0], [72.8, 364.0], [72.9, 364.0], [73.0, 364.0], [73.1, 365.0], [73.2, 365.0], [73.3, 366.0], [73.4, 366.0], [73.5, 366.0], [73.6, 367.0], [73.7, 367.0], [73.8, 368.0], [73.9, 368.0], [74.0, 368.0], [74.1, 368.0], [74.2, 368.0], [74.3, 369.0], [74.4, 369.0], [74.5, 369.0], [74.6, 370.0], [74.7, 370.0], [74.8, 370.0], [74.9, 370.0], [75.0, 371.0], [75.1, 371.0], [75.2, 372.0], [75.3, 372.0], [75.4, 373.0], [75.5, 373.0], [75.6, 374.0], [75.7, 374.0], [75.8, 374.0], [75.9, 375.0], [76.0, 375.0], [76.1, 375.0], [76.2, 375.0], [76.3, 376.0], [76.4, 376.0], [76.5, 377.0], [76.6, 377.0], [76.7, 377.0], [76.8, 378.0], [76.9, 378.0], [77.0, 378.0], [77.1, 378.0], [77.2, 378.0], [77.3, 379.0], [77.4, 380.0], [77.5, 380.0], [77.6, 381.0], [77.7, 381.0], [77.8, 381.0], [77.9, 382.0], [78.0, 382.0], [78.1, 383.0], [78.2, 383.0], [78.3, 384.0], [78.4, 384.0], [78.5, 384.0], [78.6, 385.0], [78.7, 385.0], [78.8, 385.0], [78.9, 385.0], [79.0, 386.0], [79.1, 386.0], [79.2, 386.0], [79.3, 387.0], [79.4, 387.0], [79.5, 387.0], [79.6, 388.0], [79.7, 388.0], [79.8, 388.0], [79.9, 389.0], [80.0, 389.0], [80.1, 389.0], [80.2, 389.0], [80.3, 389.0], [80.4, 391.0], [80.5, 391.0], [80.6, 391.0], [80.7, 391.0], [80.8, 391.0], [80.9, 392.0], [81.0, 392.0], [81.1, 392.0], [81.2, 392.0], [81.3, 392.0], [81.4, 392.0], [81.5, 393.0], [81.6, 393.0], [81.7, 393.0], [81.8, 393.0], [81.9, 393.0], [82.0, 394.0], [82.1, 395.0], [82.2, 395.0], [82.3, 395.0], [82.4, 395.0], [82.5, 395.0], [82.6, 396.0], [82.7, 396.0], [82.8, 396.0], [82.9, 396.0], [83.0, 396.0], [83.1, 396.0], [83.2, 397.0], [83.3, 397.0], [83.4, 397.0], [83.5, 397.0], [83.6, 397.0], [83.7, 398.0], [83.8, 398.0], [83.9, 399.0], [84.0, 399.0], [84.1, 400.0], [84.2, 400.0], [84.3, 400.0], [84.4, 401.0], [84.5, 402.0], [84.6, 402.0], [84.7, 404.0], [84.8, 404.0], [84.9, 405.0], [85.0, 406.0], [85.1, 406.0], [85.2, 406.0], [85.3, 407.0], [85.4, 408.0], [85.5, 408.0], [85.6, 408.0], [85.7, 408.0], [85.8, 409.0], [85.9, 409.0], [86.0, 409.0], [86.1, 410.0], [86.2, 411.0], [86.3, 411.0], [86.4, 413.0], [86.5, 414.0], [86.6, 414.0], [86.7, 415.0], [86.8, 416.0], [86.9, 416.0], [87.0, 417.0], [87.1, 417.0], [87.2, 418.0], [87.3, 418.0], [87.4, 419.0], [87.5, 420.0], [87.6, 420.0], [87.7, 420.0], [87.8, 420.0], [87.9, 421.0], [88.0, 421.0], [88.1, 421.0], [88.2, 422.0], [88.3, 422.0], [88.4, 423.0], [88.5, 423.0], [88.6, 424.0], [88.7, 424.0], [88.8, 424.0], [88.9, 425.0], [89.0, 426.0], [89.1, 428.0], [89.2, 428.0], [89.3, 428.0], [89.4, 429.0], [89.5, 429.0], [89.6, 429.0], [89.7, 429.0], [89.8, 430.0], [89.9, 430.0], [90.0, 430.0], [90.1, 430.0], [90.2, 432.0], [90.3, 435.0], [90.4, 435.0], [90.5, 435.0], [90.6, 436.0], [90.7, 436.0], [90.8, 436.0], [90.9, 437.0], [91.0, 437.0], [91.1, 438.0], [91.2, 440.0], [91.3, 441.0], [91.4, 441.0], [91.5, 441.0], [91.6, 441.0], [91.7, 442.0], [91.8, 444.0], [91.9, 446.0], [92.0, 446.0], [92.1, 446.0], [92.2, 447.0], [92.3, 449.0], [92.4, 451.0], [92.5, 452.0], [92.6, 453.0], [92.7, 453.0], [92.8, 454.0], [92.9, 454.0], [93.0, 458.0], [93.1, 458.0], [93.2, 458.0], [93.3, 460.0], [93.4, 462.0], [93.5, 462.0], [93.6, 463.0], [93.7, 463.0], [93.8, 464.0], [93.9, 467.0], [94.0, 468.0], [94.1, 471.0], [94.2, 471.0], [94.3, 472.0], [94.4, 472.0], [94.5, 473.0], [94.6, 474.0], [94.7, 474.0], [94.8, 475.0], [94.9, 475.0], [95.0, 475.0], [95.1, 476.0], [95.2, 476.0], [95.3, 477.0], [95.4, 478.0], [95.5, 483.0], [95.6, 486.0], [95.7, 487.0], [95.8, 488.0], [95.9, 488.0], [96.0, 488.0], [96.1, 492.0], [96.2, 494.0], [96.3, 495.0], [96.4, 495.0], [96.5, 495.0], [96.6, 496.0], [96.7, 499.0], [96.8, 499.0], [96.9, 500.0], [97.0, 501.0], [97.1, 502.0], [97.2, 502.0], [97.3, 502.0], [97.4, 507.0], [97.5, 507.0], [97.6, 509.0], [97.7, 512.0], [97.8, 513.0], [97.9, 513.0], [98.0, 515.0], [98.1, 516.0], [98.2, 517.0], [98.3, 521.0], [98.4, 522.0], [98.5, 523.0], [98.6, 525.0], [98.7, 527.0], [98.8, 527.0], [98.9, 532.0], [99.0, 535.0], [99.1, 537.0], [99.2, 543.0], [99.3, 549.0], [99.4, 560.0], [99.5, 565.0], [99.6, 580.0], [99.7, 593.0], [99.8, 600.0], [99.9, 6549.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 398.0, "series": [{"data": [[300.0, 398.0], [600.0, 1.0], [100.0, 55.0], [200.0, 388.0], [400.0, 128.0], [6500.0, 1.0], [500.0, 29.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 970.0, "series": [{"data": [[0.0, 970.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 29.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 53.66400000000001, "minX": 1.59101124E12, "maxY": 53.66400000000001, "series": [{"data": [[1.59101124E12, 53.66400000000001]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101124E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 187.5, "minX": 1.0, "maxY": 6549.0, "series": [{"data": [[2.0, 221.0], [3.0, 202.0], [4.0, 206.0], [5.0, 301.0], [6.0, 217.0], [7.0, 239.0], [8.0, 205.0], [9.0, 230.0], [10.0, 201.0], [11.0, 230.0], [12.0, 245.0], [13.0, 205.0], [14.0, 375.0], [15.0, 202.0], [16.0, 200.0], [17.0, 241.0], [18.0, 190.0], [19.0, 327.0], [20.0, 471.0], [21.0, 245.0], [22.0, 360.0], [23.0, 252.0], [24.0, 290.0], [25.0, 263.5], [26.0, 241.0], [27.0, 216.5], [28.0, 213.5], [29.0, 381.0], [30.0, 435.0], [31.0, 284.5], [33.0, 187.5], [32.0, 368.5], [34.0, 240.12500000000003], [35.0, 219.25], [37.0, 277.1764705882353], [36.0, 306.6], [39.0, 275.25], [38.0, 284.93333333333334], [41.0, 281.7777777777778], [40.0, 291.2941176470588], [43.0, 303.05555555555554], [42.0, 299.2352941176471], [45.0, 285.54838709677415], [44.0, 293.2105263157895], [47.0, 301.657894736842], [46.0, 306.64285714285717], [49.0, 281.1290322580645], [48.0, 280.2222222222223], [51.0, 291.0], [50.0, 290.8108108108108], [52.0, 321.5116279069767], [53.0, 308.99999999999994], [55.0, 320.01818181818174], [54.0, 319.6031746031745], [57.0, 333.0], [56.0, 327.0769230769231], [58.0, 289.7058823529412], [59.0, 397.90909090909093], [60.0, 332.78947368421046], [61.0, 374.72222222222223], [62.0, 342.94117647058823], [63.0, 365.5], [64.0, 389.72727272727275], [66.0, 339.2857142857143], [67.0, 379.74999999999994], [65.0, 370.49999999999994], [68.0, 341.1578947368422], [69.0, 337.84615384615387], [71.0, 427.0769230769231], [70.0, 378.7857142857143], [72.0, 317.8181818181818], [73.0, 366.46153846153845], [75.0, 386.38461538461536], [74.0, 363.9090909090909], [79.0, 357.07142857142867], [78.0, 367.21428571428567], [77.0, 364.14285714285717], [76.0, 368.70000000000005], [80.0, 335.55555555555554], [81.0, 428.0], [82.0, 368.0], [83.0, 365.3333333333333], [85.0, 382.5], [84.0, 370.0], [86.0, 516.0], [1.0, 6549.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[53.66400000000001, 325.1790000000001]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 86.0, "title": "Time VS Threads"}},
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
        data: {"result": {"minY": 325.1790000000001, "minX": 1.59101124E12, "maxY": 325.1790000000001, "series": [{"data": [[1.59101124E12, 325.1790000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101124E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 325.12500000000017, "minX": 1.59101124E12, "maxY": 325.12500000000017, "series": [{"data": [[1.59101124E12, 325.12500000000017]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101124E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2.123, "minX": 1.59101124E12, "maxY": 2.123, "series": [{"data": [[1.59101124E12, 2.123]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101124E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 137.0, "minX": 1.59101124E12, "maxY": 6549.0, "series": [{"data": [[1.59101124E12, 6549.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.59101124E12, 163.008999761343]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.59101124E12, 163.9099000954628]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.59101124E12, 163.5094998806715]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.59101124E12, 137.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.59101124E12, 311.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101124E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 229.0, "minX": 1.0, "maxY": 6549.0, "series": [{"data": [[134.0, 341.0], [1.0, 6549.0], [148.0, 284.0], [162.0, 327.0], [160.0, 331.0], [194.0, 327.0], [53.0, 229.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 194.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 229.0, "minX": 1.0, "maxY": 6549.0, "series": [{"data": [[134.0, 341.0], [1.0, 6549.0], [148.0, 284.0], [162.0, 327.0], [160.0, 331.0], [194.0, 327.0], [53.0, 229.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 194.0, "title": "Latencies Vs Request"}},
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

