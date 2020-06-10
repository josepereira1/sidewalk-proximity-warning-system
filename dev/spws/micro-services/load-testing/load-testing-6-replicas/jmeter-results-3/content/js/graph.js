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
        data: {"result": {"minY": 95.0, "minX": 0.0, "maxY": 1482.0, "series": [{"data": [[0.0, 95.0], [0.1, 100.0], [0.2, 104.0], [0.3, 104.0], [0.4, 112.0], [0.5, 112.0], [0.6, 112.0], [0.7, 117.0], [0.8, 130.0], [0.9, 132.0], [1.0, 135.0], [1.1, 137.0], [1.2, 137.0], [1.3, 138.0], [1.4, 138.0], [1.5, 141.0], [1.6, 143.0], [1.7, 144.0], [1.8, 146.0], [1.9, 148.0], [2.0, 149.0], [2.1, 149.0], [2.2, 150.0], [2.3, 151.0], [2.4, 151.0], [2.5, 152.0], [2.6, 154.0], [2.7, 154.0], [2.8, 154.0], [2.9, 155.0], [3.0, 157.0], [3.1, 157.0], [3.2, 157.0], [3.3, 158.0], [3.4, 158.0], [3.5, 159.0], [3.6, 159.0], [3.7, 160.0], [3.8, 160.0], [3.9, 161.0], [4.0, 162.0], [4.1, 165.0], [4.2, 169.0], [4.3, 169.0], [4.4, 170.0], [4.5, 170.0], [4.6, 171.0], [4.7, 171.0], [4.8, 172.0], [4.9, 172.0], [5.0, 173.0], [5.1, 173.0], [5.2, 174.0], [5.3, 174.0], [5.4, 174.0], [5.5, 176.0], [5.6, 176.0], [5.7, 176.0], [5.8, 177.0], [5.9, 177.0], [6.0, 177.0], [6.1, 178.0], [6.2, 179.0], [6.3, 179.0], [6.4, 180.0], [6.5, 180.0], [6.6, 181.0], [6.7, 181.0], [6.8, 181.0], [6.9, 182.0], [7.0, 182.0], [7.1, 182.0], [7.2, 184.0], [7.3, 185.0], [7.4, 185.0], [7.5, 186.0], [7.6, 186.0], [7.7, 187.0], [7.8, 187.0], [7.9, 187.0], [8.0, 188.0], [8.1, 189.0], [8.2, 189.0], [8.3, 189.0], [8.4, 189.0], [8.5, 189.0], [8.6, 190.0], [8.7, 190.0], [8.8, 191.0], [8.9, 191.0], [9.0, 191.0], [9.1, 191.0], [9.2, 193.0], [9.3, 193.0], [9.4, 193.0], [9.5, 194.0], [9.6, 194.0], [9.7, 194.0], [9.8, 194.0], [9.9, 195.0], [10.0, 195.0], [10.1, 195.0], [10.2, 195.0], [10.3, 196.0], [10.4, 196.0], [10.5, 196.0], [10.6, 197.0], [10.7, 197.0], [10.8, 199.0], [10.9, 199.0], [11.0, 199.0], [11.1, 199.0], [11.2, 199.0], [11.3, 201.0], [11.4, 201.0], [11.5, 201.0], [11.6, 201.0], [11.7, 202.0], [11.8, 202.0], [11.9, 202.0], [12.0, 203.0], [12.1, 204.0], [12.2, 204.0], [12.3, 204.0], [12.4, 204.0], [12.5, 205.0], [12.6, 205.0], [12.7, 205.0], [12.8, 205.0], [12.9, 205.0], [13.0, 205.0], [13.1, 206.0], [13.2, 206.0], [13.3, 206.0], [13.4, 206.0], [13.5, 207.0], [13.6, 208.0], [13.7, 208.0], [13.8, 208.0], [13.9, 208.0], [14.0, 208.0], [14.1, 209.0], [14.2, 209.0], [14.3, 209.0], [14.4, 209.0], [14.5, 210.0], [14.6, 210.0], [14.7, 210.0], [14.8, 211.0], [14.9, 211.0], [15.0, 211.0], [15.1, 212.0], [15.2, 212.0], [15.3, 212.0], [15.4, 212.0], [15.5, 212.0], [15.6, 213.0], [15.7, 214.0], [15.8, 214.0], [15.9, 215.0], [16.0, 216.0], [16.1, 217.0], [16.2, 217.0], [16.3, 217.0], [16.4, 217.0], [16.5, 217.0], [16.6, 218.0], [16.7, 218.0], [16.8, 219.0], [16.9, 219.0], [17.0, 220.0], [17.1, 220.0], [17.2, 220.0], [17.3, 220.0], [17.4, 220.0], [17.5, 220.0], [17.6, 221.0], [17.7, 221.0], [17.8, 221.0], [17.9, 221.0], [18.0, 221.0], [18.1, 221.0], [18.2, 221.0], [18.3, 222.0], [18.4, 222.0], [18.5, 222.0], [18.6, 223.0], [18.7, 223.0], [18.8, 223.0], [18.9, 223.0], [19.0, 223.0], [19.1, 225.0], [19.2, 225.0], [19.3, 226.0], [19.4, 226.0], [19.5, 227.0], [19.6, 228.0], [19.7, 228.0], [19.8, 228.0], [19.9, 228.0], [20.0, 229.0], [20.1, 229.0], [20.2, 229.0], [20.3, 229.0], [20.4, 229.0], [20.5, 229.0], [20.6, 230.0], [20.7, 230.0], [20.8, 230.0], [20.9, 230.0], [21.0, 231.0], [21.1, 231.0], [21.2, 231.0], [21.3, 231.0], [21.4, 232.0], [21.5, 232.0], [21.6, 232.0], [21.7, 233.0], [21.8, 234.0], [21.9, 234.0], [22.0, 234.0], [22.1, 235.0], [22.2, 235.0], [22.3, 236.0], [22.4, 236.0], [22.5, 236.0], [22.6, 236.0], [22.7, 238.0], [22.8, 238.0], [22.9, 238.0], [23.0, 238.0], [23.1, 238.0], [23.2, 239.0], [23.3, 239.0], [23.4, 239.0], [23.5, 240.0], [23.6, 241.0], [23.7, 241.0], [23.8, 241.0], [23.9, 241.0], [24.0, 242.0], [24.1, 242.0], [24.2, 243.0], [24.3, 243.0], [24.4, 244.0], [24.5, 244.0], [24.6, 244.0], [24.7, 244.0], [24.8, 245.0], [24.9, 247.0], [25.0, 247.0], [25.1, 247.0], [25.2, 247.0], [25.3, 247.0], [25.4, 247.0], [25.5, 247.0], [25.6, 248.0], [25.7, 248.0], [25.8, 248.0], [25.9, 249.0], [26.0, 249.0], [26.1, 249.0], [26.2, 251.0], [26.3, 251.0], [26.4, 252.0], [26.5, 252.0], [26.6, 252.0], [26.7, 252.0], [26.8, 252.0], [26.9, 252.0], [27.0, 253.0], [27.1, 253.0], [27.2, 253.0], [27.3, 253.0], [27.4, 253.0], [27.5, 254.0], [27.6, 254.0], [27.7, 254.0], [27.8, 254.0], [27.9, 254.0], [28.0, 254.0], [28.1, 255.0], [28.2, 255.0], [28.3, 255.0], [28.4, 255.0], [28.5, 256.0], [28.6, 256.0], [28.7, 256.0], [28.8, 256.0], [28.9, 256.0], [29.0, 257.0], [29.1, 257.0], [29.2, 257.0], [29.3, 258.0], [29.4, 258.0], [29.5, 259.0], [29.6, 259.0], [29.7, 259.0], [29.8, 260.0], [29.9, 260.0], [30.0, 260.0], [30.1, 260.0], [30.2, 260.0], [30.3, 260.0], [30.4, 260.0], [30.5, 261.0], [30.6, 261.0], [30.7, 261.0], [30.8, 262.0], [30.9, 262.0], [31.0, 263.0], [31.1, 263.0], [31.2, 263.0], [31.3, 263.0], [31.4, 263.0], [31.5, 264.0], [31.6, 264.0], [31.7, 265.0], [31.8, 265.0], [31.9, 266.0], [32.0, 266.0], [32.1, 266.0], [32.2, 266.0], [32.3, 267.0], [32.4, 267.0], [32.5, 267.0], [32.6, 267.0], [32.7, 267.0], [32.8, 267.0], [32.9, 267.0], [33.0, 267.0], [33.1, 267.0], [33.2, 268.0], [33.3, 268.0], [33.4, 268.0], [33.5, 268.0], [33.6, 268.0], [33.7, 269.0], [33.8, 269.0], [33.9, 269.0], [34.0, 269.0], [34.1, 269.0], [34.2, 269.0], [34.3, 269.0], [34.4, 269.0], [34.5, 269.0], [34.6, 269.0], [34.7, 269.0], [34.8, 269.0], [34.9, 270.0], [35.0, 270.0], [35.1, 271.0], [35.2, 271.0], [35.3, 271.0], [35.4, 271.0], [35.5, 271.0], [35.6, 271.0], [35.7, 272.0], [35.8, 272.0], [35.9, 272.0], [36.0, 272.0], [36.1, 272.0], [36.2, 272.0], [36.3, 272.0], [36.4, 272.0], [36.5, 273.0], [36.6, 273.0], [36.7, 274.0], [36.8, 274.0], [36.9, 274.0], [37.0, 274.0], [37.1, 274.0], [37.2, 275.0], [37.3, 275.0], [37.4, 275.0], [37.5, 276.0], [37.6, 276.0], [37.7, 277.0], [37.8, 277.0], [37.9, 278.0], [38.0, 278.0], [38.1, 279.0], [38.2, 279.0], [38.3, 279.0], [38.4, 280.0], [38.5, 280.0], [38.6, 281.0], [38.7, 281.0], [38.8, 281.0], [38.9, 281.0], [39.0, 281.0], [39.1, 281.0], [39.2, 282.0], [39.3, 282.0], [39.4, 283.0], [39.5, 283.0], [39.6, 283.0], [39.7, 284.0], [39.8, 284.0], [39.9, 284.0], [40.0, 284.0], [40.1, 284.0], [40.2, 284.0], [40.3, 285.0], [40.4, 285.0], [40.5, 285.0], [40.6, 285.0], [40.7, 285.0], [40.8, 285.0], [40.9, 285.0], [41.0, 286.0], [41.1, 286.0], [41.2, 286.0], [41.3, 287.0], [41.4, 288.0], [41.5, 288.0], [41.6, 288.0], [41.7, 288.0], [41.8, 288.0], [41.9, 289.0], [42.0, 289.0], [42.1, 289.0], [42.2, 289.0], [42.3, 289.0], [42.4, 290.0], [42.5, 290.0], [42.6, 290.0], [42.7, 290.0], [42.8, 290.0], [42.9, 290.0], [43.0, 291.0], [43.1, 291.0], [43.2, 291.0], [43.3, 291.0], [43.4, 291.0], [43.5, 292.0], [43.6, 292.0], [43.7, 292.0], [43.8, 293.0], [43.9, 293.0], [44.0, 293.0], [44.1, 294.0], [44.2, 294.0], [44.3, 294.0], [44.4, 295.0], [44.5, 295.0], [44.6, 295.0], [44.7, 295.0], [44.8, 295.0], [44.9, 296.0], [45.0, 296.0], [45.1, 296.0], [45.2, 296.0], [45.3, 296.0], [45.4, 297.0], [45.5, 297.0], [45.6, 297.0], [45.7, 297.0], [45.8, 298.0], [45.9, 298.0], [46.0, 299.0], [46.1, 299.0], [46.2, 299.0], [46.3, 299.0], [46.4, 300.0], [46.5, 300.0], [46.6, 301.0], [46.7, 301.0], [46.8, 301.0], [46.9, 301.0], [47.0, 301.0], [47.1, 301.0], [47.2, 301.0], [47.3, 302.0], [47.4, 302.0], [47.5, 303.0], [47.6, 304.0], [47.7, 304.0], [47.8, 304.0], [47.9, 305.0], [48.0, 305.0], [48.1, 305.0], [48.2, 305.0], [48.3, 305.0], [48.4, 306.0], [48.5, 306.0], [48.6, 306.0], [48.7, 306.0], [48.8, 308.0], [48.9, 309.0], [49.0, 309.0], [49.1, 309.0], [49.2, 309.0], [49.3, 309.0], [49.4, 309.0], [49.5, 310.0], [49.6, 310.0], [49.7, 311.0], [49.8, 314.0], [49.9, 314.0], [50.0, 314.0], [50.1, 315.0], [50.2, 315.0], [50.3, 316.0], [50.4, 316.0], [50.5, 317.0], [50.6, 317.0], [50.7, 317.0], [50.8, 317.0], [50.9, 317.0], [51.0, 318.0], [51.1, 318.0], [51.2, 318.0], [51.3, 318.0], [51.4, 319.0], [51.5, 319.0], [51.6, 320.0], [51.7, 320.0], [51.8, 320.0], [51.9, 321.0], [52.0, 321.0], [52.1, 321.0], [52.2, 321.0], [52.3, 321.0], [52.4, 322.0], [52.5, 322.0], [52.6, 322.0], [52.7, 323.0], [52.8, 323.0], [52.9, 324.0], [53.0, 324.0], [53.1, 324.0], [53.2, 324.0], [53.3, 324.0], [53.4, 324.0], [53.5, 325.0], [53.6, 325.0], [53.7, 326.0], [53.8, 326.0], [53.9, 326.0], [54.0, 326.0], [54.1, 326.0], [54.2, 327.0], [54.3, 327.0], [54.4, 327.0], [54.5, 327.0], [54.6, 327.0], [54.7, 328.0], [54.8, 328.0], [54.9, 328.0], [55.0, 328.0], [55.1, 328.0], [55.2, 329.0], [55.3, 329.0], [55.4, 329.0], [55.5, 330.0], [55.6, 331.0], [55.7, 331.0], [55.8, 331.0], [55.9, 332.0], [56.0, 332.0], [56.1, 332.0], [56.2, 332.0], [56.3, 332.0], [56.4, 333.0], [56.5, 333.0], [56.6, 333.0], [56.7, 333.0], [56.8, 333.0], [56.9, 333.0], [57.0, 334.0], [57.1, 334.0], [57.2, 334.0], [57.3, 335.0], [57.4, 335.0], [57.5, 336.0], [57.6, 336.0], [57.7, 336.0], [57.8, 336.0], [57.9, 337.0], [58.0, 338.0], [58.1, 338.0], [58.2, 338.0], [58.3, 339.0], [58.4, 339.0], [58.5, 339.0], [58.6, 340.0], [58.7, 341.0], [58.8, 341.0], [58.9, 341.0], [59.0, 342.0], [59.1, 343.0], [59.2, 343.0], [59.3, 343.0], [59.4, 343.0], [59.5, 343.0], [59.6, 344.0], [59.7, 344.0], [59.8, 344.0], [59.9, 344.0], [60.0, 345.0], [60.1, 345.0], [60.2, 345.0], [60.3, 345.0], [60.4, 345.0], [60.5, 345.0], [60.6, 345.0], [60.7, 345.0], [60.8, 346.0], [60.9, 346.0], [61.0, 346.0], [61.1, 346.0], [61.2, 347.0], [61.3, 347.0], [61.4, 347.0], [61.5, 348.0], [61.6, 348.0], [61.7, 349.0], [61.8, 350.0], [61.9, 350.0], [62.0, 351.0], [62.1, 352.0], [62.2, 352.0], [62.3, 352.0], [62.4, 352.0], [62.5, 352.0], [62.6, 353.0], [62.7, 353.0], [62.8, 354.0], [62.9, 354.0], [63.0, 354.0], [63.1, 354.0], [63.2, 354.0], [63.3, 354.0], [63.4, 355.0], [63.5, 355.0], [63.6, 355.0], [63.7, 356.0], [63.8, 356.0], [63.9, 356.0], [64.0, 356.0], [64.1, 357.0], [64.2, 357.0], [64.3, 357.0], [64.4, 358.0], [64.5, 358.0], [64.6, 358.0], [64.7, 358.0], [64.8, 359.0], [64.9, 359.0], [65.0, 359.0], [65.1, 359.0], [65.2, 359.0], [65.3, 361.0], [65.4, 361.0], [65.5, 362.0], [65.6, 362.0], [65.7, 362.0], [65.8, 362.0], [65.9, 362.0], [66.0, 362.0], [66.1, 363.0], [66.2, 363.0], [66.3, 363.0], [66.4, 363.0], [66.5, 363.0], [66.6, 365.0], [66.7, 366.0], [66.8, 366.0], [66.9, 366.0], [67.0, 367.0], [67.1, 367.0], [67.2, 367.0], [67.3, 368.0], [67.4, 368.0], [67.5, 368.0], [67.6, 369.0], [67.7, 371.0], [67.8, 371.0], [67.9, 371.0], [68.0, 371.0], [68.1, 371.0], [68.2, 372.0], [68.3, 372.0], [68.4, 374.0], [68.5, 374.0], [68.6, 374.0], [68.7, 375.0], [68.8, 375.0], [68.9, 376.0], [69.0, 377.0], [69.1, 378.0], [69.2, 378.0], [69.3, 379.0], [69.4, 379.0], [69.5, 379.0], [69.6, 380.0], [69.7, 380.0], [69.8, 380.0], [69.9, 381.0], [70.0, 383.0], [70.1, 383.0], [70.2, 384.0], [70.3, 384.0], [70.4, 384.0], [70.5, 385.0], [70.6, 386.0], [70.7, 387.0], [70.8, 387.0], [70.9, 387.0], [71.0, 388.0], [71.1, 388.0], [71.2, 388.0], [71.3, 388.0], [71.4, 389.0], [71.5, 389.0], [71.6, 391.0], [71.7, 392.0], [71.8, 392.0], [71.9, 392.0], [72.0, 392.0], [72.1, 393.0], [72.2, 394.0], [72.3, 394.0], [72.4, 395.0], [72.5, 395.0], [72.6, 395.0], [72.7, 396.0], [72.8, 396.0], [72.9, 396.0], [73.0, 397.0], [73.1, 397.0], [73.2, 397.0], [73.3, 397.0], [73.4, 398.0], [73.5, 398.0], [73.6, 399.0], [73.7, 399.0], [73.8, 399.0], [73.9, 399.0], [74.0, 399.0], [74.1, 400.0], [74.2, 401.0], [74.3, 403.0], [74.4, 403.0], [74.5, 404.0], [74.6, 404.0], [74.7, 404.0], [74.8, 405.0], [74.9, 405.0], [75.0, 405.0], [75.1, 405.0], [75.2, 406.0], [75.3, 406.0], [75.4, 407.0], [75.5, 407.0], [75.6, 407.0], [75.7, 407.0], [75.8, 408.0], [75.9, 408.0], [76.0, 409.0], [76.1, 409.0], [76.2, 409.0], [76.3, 410.0], [76.4, 410.0], [76.5, 411.0], [76.6, 411.0], [76.7, 411.0], [76.8, 411.0], [76.9, 412.0], [77.0, 412.0], [77.1, 413.0], [77.2, 414.0], [77.3, 414.0], [77.4, 414.0], [77.5, 414.0], [77.6, 415.0], [77.7, 415.0], [77.8, 415.0], [77.9, 415.0], [78.0, 415.0], [78.1, 416.0], [78.2, 416.0], [78.3, 418.0], [78.4, 418.0], [78.5, 418.0], [78.6, 419.0], [78.7, 420.0], [78.8, 420.0], [78.9, 421.0], [79.0, 421.0], [79.1, 422.0], [79.2, 422.0], [79.3, 422.0], [79.4, 423.0], [79.5, 423.0], [79.6, 423.0], [79.7, 423.0], [79.8, 425.0], [79.9, 425.0], [80.0, 425.0], [80.1, 426.0], [80.2, 426.0], [80.3, 428.0], [80.4, 429.0], [80.5, 429.0], [80.6, 431.0], [80.7, 431.0], [80.8, 432.0], [80.9, 434.0], [81.0, 434.0], [81.1, 437.0], [81.2, 437.0], [81.3, 437.0], [81.4, 437.0], [81.5, 437.0], [81.6, 437.0], [81.7, 440.0], [81.8, 440.0], [81.9, 442.0], [82.0, 442.0], [82.1, 442.0], [82.2, 443.0], [82.3, 444.0], [82.4, 445.0], [82.5, 445.0], [82.6, 445.0], [82.7, 446.0], [82.8, 446.0], [82.9, 446.0], [83.0, 447.0], [83.1, 448.0], [83.2, 450.0], [83.3, 451.0], [83.4, 451.0], [83.5, 452.0], [83.6, 453.0], [83.7, 453.0], [83.8, 454.0], [83.9, 454.0], [84.0, 455.0], [84.1, 457.0], [84.2, 457.0], [84.3, 457.0], [84.4, 457.0], [84.5, 458.0], [84.6, 459.0], [84.7, 460.0], [84.8, 462.0], [84.9, 462.0], [85.0, 463.0], [85.1, 463.0], [85.2, 464.0], [85.3, 464.0], [85.4, 466.0], [85.5, 466.0], [85.6, 466.0], [85.7, 471.0], [85.8, 472.0], [85.9, 472.0], [86.0, 473.0], [86.1, 474.0], [86.2, 475.0], [86.3, 476.0], [86.4, 477.0], [86.5, 477.0], [86.6, 478.0], [86.7, 482.0], [86.8, 482.0], [86.9, 482.0], [87.0, 482.0], [87.1, 482.0], [87.2, 483.0], [87.3, 484.0], [87.4, 487.0], [87.5, 487.0], [87.6, 490.0], [87.7, 490.0], [87.8, 491.0], [87.9, 492.0], [88.0, 493.0], [88.1, 493.0], [88.2, 493.0], [88.3, 494.0], [88.4, 495.0], [88.5, 495.0], [88.6, 496.0], [88.7, 496.0], [88.8, 497.0], [88.9, 497.0], [89.0, 498.0], [89.1, 500.0], [89.2, 501.0], [89.3, 502.0], [89.4, 502.0], [89.5, 503.0], [89.6, 505.0], [89.7, 506.0], [89.8, 506.0], [89.9, 507.0], [90.0, 508.0], [90.1, 508.0], [90.2, 509.0], [90.3, 509.0], [90.4, 509.0], [90.5, 509.0], [90.6, 510.0], [90.7, 511.0], [90.8, 512.0], [90.9, 513.0], [91.0, 513.0], [91.1, 513.0], [91.2, 514.0], [91.3, 516.0], [91.4, 521.0], [91.5, 524.0], [91.6, 527.0], [91.7, 528.0], [91.8, 528.0], [91.9, 529.0], [92.0, 530.0], [92.1, 531.0], [92.2, 531.0], [92.3, 534.0], [92.4, 534.0], [92.5, 534.0], [92.6, 535.0], [92.7, 537.0], [92.8, 537.0], [92.9, 538.0], [93.0, 538.0], [93.1, 540.0], [93.2, 540.0], [93.3, 542.0], [93.4, 544.0], [93.5, 544.0], [93.6, 549.0], [93.7, 551.0], [93.8, 560.0], [93.9, 560.0], [94.0, 561.0], [94.1, 565.0], [94.2, 565.0], [94.3, 567.0], [94.4, 568.0], [94.5, 573.0], [94.6, 574.0], [94.7, 575.0], [94.8, 577.0], [94.9, 577.0], [95.0, 577.0], [95.1, 578.0], [95.2, 578.0], [95.3, 580.0], [95.4, 581.0], [95.5, 583.0], [95.6, 589.0], [95.7, 596.0], [95.8, 597.0], [95.9, 600.0], [96.0, 600.0], [96.1, 607.0], [96.2, 610.0], [96.3, 610.0], [96.4, 611.0], [96.5, 612.0], [96.6, 613.0], [96.7, 621.0], [96.8, 622.0], [96.9, 630.0], [97.0, 630.0], [97.1, 632.0], [97.2, 635.0], [97.3, 635.0], [97.4, 641.0], [97.5, 651.0], [97.6, 669.0], [97.7, 670.0], [97.8, 670.0], [97.9, 672.0], [98.0, 676.0], [98.1, 686.0], [98.2, 706.0], [98.3, 709.0], [98.4, 713.0], [98.5, 754.0], [98.6, 758.0], [98.7, 772.0], [98.8, 808.0], [98.9, 1297.0], [99.0, 1305.0], [99.1, 1325.0], [99.2, 1343.0], [99.3, 1366.0], [99.4, 1381.0], [99.5, 1438.0], [99.6, 1439.0], [99.7, 1458.0], [99.8, 1473.0], [99.9, 1482.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 351.0, "series": [{"data": [[0.0, 1.0], [300.0, 278.0], [600.0, 23.0], [1200.0, 1.0], [1300.0, 5.0], [700.0, 6.0], [1400.0, 5.0], [100.0, 111.0], [200.0, 351.0], [400.0, 150.0], [800.0, 1.0], [500.0, 68.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 108.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 892.0, "series": [{"data": [[0.0, 892.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 108.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 58.353999999999985, "minX": 1.59101088E12, "maxY": 58.353999999999985, "series": [{"data": [[1.59101088E12, 58.353999999999985]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101088E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 146.0, "minX": 1.0, "maxY": 525.4, "series": [{"data": [[2.0, 171.0], [3.0, 194.0], [4.0, 146.0], [5.0, 238.0], [6.0, 223.0], [7.0, 261.5], [8.0, 235.5], [9.0, 212.0], [10.0, 225.5], [11.0, 204.0], [12.0, 197.0], [13.0, 239.5], [14.0, 198.5], [15.0, 190.5], [16.0, 188.0], [17.0, 199.0], [18.0, 280.0], [19.0, 213.5], [20.0, 214.0], [21.0, 263.0], [22.0, 239.0], [23.0, 231.0], [24.0, 193.0], [25.0, 220.0], [26.0, 274.0], [27.0, 214.25], [28.0, 247.0], [29.0, 261.8], [30.0, 218.0], [31.0, 297.2], [33.0, 295.1111111111111], [32.0, 226.5], [34.0, 333.25], [35.0, 282.6666666666667], [37.0, 254.16666666666666], [36.0, 249.60000000000002], [39.0, 230.38888888888889], [38.0, 262.0625], [41.0, 237.30434782608694], [40.0, 228.45], [43.0, 275.60714285714283], [42.0, 263.33333333333337], [45.0, 274.8484848484849], [44.0, 303.14285714285705], [47.0, 291.83333333333337], [46.0, 329.16666666666663], [49.0, 406.0833333333333], [48.0, 311.35], [51.0, 310.9047619047619], [50.0, 307.05882352941177], [53.0, 364.45], [52.0, 365.22727272727275], [55.0, 341.24999999999994], [54.0, 425.5384615384616], [57.0, 299.7857142857143], [56.0, 298.8666666666666], [59.0, 343.29411764705884], [58.0, 362.20000000000005], [61.0, 502.8888888888889], [60.0, 444.88235294117646], [63.0, 344.3076923076923], [62.0, 525.4], [67.0, 522.2727272727274], [66.0, 359.77777777777777], [64.0, 332.99999999999994], [65.0, 312.4444444444445], [71.0, 421.56250000000006], [70.0, 368.52941176470586], [69.0, 405.8235294117647], [68.0, 422.66666666666663], [75.0, 389.6470588235294], [74.0, 424.40909090909093], [73.0, 412.5625], [72.0, 428.4375], [79.0, 436.9], [78.0, 394.3333333333333], [77.0, 442.54545454545456], [76.0, 384.4166666666667], [83.0, 420.26666666666665], [82.0, 400.53846153846155], [81.0, 386.1111111111111], [80.0, 410.2857142857143], [87.0, 316.0], [86.0, 461.2], [85.0, 492.99999999999994], [84.0, 375.55555555555554], [91.0, 318.5], [89.0, 370.6666666666667], [88.0, 350.6666666666667], [90.0, 431.75], [92.0, 356.66666666666663], [93.0, 377.625], [95.0, 335.75], [94.0, 389.75], [97.0, 326.09999999999997], [96.0, 328.12500000000006], [98.0, 410.0], [99.0, 441.0], [102.0, 421.5], [101.0, 334.6], [100.0, 452.66666666666663], [103.0, 477.0], [105.0, 457.0], [104.0, 471.0], [1.0, 160.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[58.353999999999985, 342.19000000000034]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 105.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3350.0, "minX": 1.59101088E12, "maxY": 4300.0, "series": [{"data": [[1.59101088E12, 3350.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.59101088E12, 4300.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101088E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 342.19000000000034, "minX": 1.59101088E12, "maxY": 342.19000000000034, "series": [{"data": [[1.59101088E12, 342.19000000000034]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101088E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 342.13199999999995, "minX": 1.59101088E12, "maxY": 342.13199999999995, "series": [{"data": [[1.59101088E12, 342.13199999999995]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101088E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 14.270000000000005, "minX": 1.59101088E12, "maxY": 14.270000000000005, "series": [{"data": [[1.59101088E12, 14.270000000000005]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101088E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 95.0, "minX": 1.59101088E12, "maxY": 1482.0, "series": [{"data": [[1.59101088E12, 1482.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.59101088E12, 130.017999522686]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.59101088E12, 131.8198001909256]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.59101088E12, 131.018999761343]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.59101088E12, 95.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.59101088E12, 314.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101088E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 184.5, "minX": 8.0, "maxY": 437.0, "series": [{"data": [[8.0, 184.5], [155.0, 229.0], [173.0, 317.0], [183.0, 327.0], [195.0, 437.0], [103.0, 254.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 195.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 184.5, "minX": 8.0, "maxY": 437.0, "series": [{"data": [[8.0, 184.5], [155.0, 229.0], [173.0, 317.0], [183.0, 327.0], [195.0, 437.0], [103.0, 254.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 195.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.59101088E12, "maxY": 16.666666666666668, "series": [{"data": [[1.59101088E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101088E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.59101088E12, "maxY": 16.666666666666668, "series": [{"data": [[1.59101088E12, 16.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101088E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.59101088E12, "maxY": 16.666666666666668, "series": [{"data": [[1.59101088E12, 16.666666666666668]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101088E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.59101088E12, "maxY": 16.666666666666668, "series": [{"data": [[1.59101088E12, 16.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101088E12, "title": "Total Transactions Per Second"}},
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

