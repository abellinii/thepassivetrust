const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function() {
  // this is to add Creative Tim licenses in the production mode for the minified js
  gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* The Passive Trust - Staking option for The Open Application Network - v1.0.0
=========================================================

* OAN Website: https://theoan.com/
* Copyright 2019 The Passive Trust (http://www.stakeaion.com)

                                      
                                                               
 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA                    
 AA                                  AA                    
 AA                                  AA                    
 AA                                  AA                    
 AA                                  AA                    
 AA                                  AA                  
 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA                   
 AA                                  AA                   
 AA                                  AA                    
 @@                            AAAAAAAAAAAAAAA                
 AA                        AAAAAAA           AAAAA          
 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA                AAA       
 @,                     AAAA                      AAA.      
 @*                   AAAA                          AA.     
 @/                  AAAA           @@@@@            AA.   
 @#                 AAA            %@@@@@*            AA.  
 AAAAAAAAAAAAAAAAAAAA             ,@@@*@@@             AA.  
.AA                AAA            @@@( &@@&            AAA 
 AA                AAA           &@@@   @@@*           AAA 
 AA                AAA          ,@@@     @@@,          AAA 
 AA                 AAA        .@@@  *%.  @@@          AA  
 AAAAAAAAAAAAAAAAAAAAAA        @@@# ,@@@, @@@%        AA.  
 AA                  AAA                             AA.   
 AA                   AAA                          AAA    
 AA                     AAA                      AAA     
 AA                       AAA                  AAAA       
 AA                  ..,   AAAAAAAAAAAAAAAAAAAAAA          
 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA       
 

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.


*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Creative Tim licenses in the production mode for the minified html
  gulp
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--

=========================================================
* The Passive Trust - Staking option for The Open Application Network - v1.0.0
=========================================================

* OAN Website: https://theoan.com/
* Copyright 2019 The Passive Trust (http://www.stakeaion.com)

                                      
                                                               
 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA                    
 AA                                  AA                    
 AA                                  AA                    
 AA                                  AA                    
 AA                                  AA                    
 AA                                  AA                  
 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA                   
 AA                                  AA                   
 AA                                  AA                    
 @@                            AAAAAAAAAAAAAAA                
 AA                        AAAAAAA           AAAAA          
 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA                AAA       
 @,                     AAAA                      AAA.      
 @*                   AAAA                          AA.     
 @/                  AAAA           @@@@@            AA.   
 @#                 AAA            %@@@@@*            AA.  
 AAAAAAAAAAAAAAAAAAAA             ,@@@*@@@             AA.  
.AA                AAA            @@@( &@@&            AAA 
 AA                AAA           &@@@   @@@*           AAA 
 AA                AAA          ,@@@     @@@,          AAA 
 AA                 AAA        .@@@  *%.  @@@          AA  
 AAAAAAAAAAAAAAAAAAAAAA        @@@# ,@@@, @@@%        AA.  
 AA                  AAA                             AA.   
 AA                   AAA                          AAA    
 AA                     AAA                      AAA     
 AA                       AAA                  AAAA       
 AA                  ..,   AAAAAAAAAAAAAAAAAAAAAA          
 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA    

=========================================================
                                      


* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.


-->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Creative Tim licenses in the production mode for the minified css
  gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!


=========================================================
* The Passive Trust - Staking option for The Open Application Network - v1.0.0
=========================================================

* OAN Website: https://theoan.com/
* Copyright 2019 The Passive Trust (http://www.stakeaion.com)

                                                               
                                      
                                                               
 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA                    
 AA                                  AA                    
 AA                                  AA                    
 AA                                  AA                    
 AA                                  AA                    
 AA                                  AA                  
 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA                   
 AA                                  AA                   
 AA                                  AA                    
 @@                            AAAAAAAAAAAAAAA                
 AA                        AAAAAAA           AAAAA          
 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA                AAA       
 @,                     AAAA                      AAA.      
 @*                   AAAA                          AA.     
 @/                  AAAA           @@@@@            AA.   
 @#                 AAA            %@@@@@*            AA.  
 AAAAAAAAAAAAAAAAAAAA             ,@@@*@@@             AA.  
.AA                AAA            @@@( &@@&            AAA 
 AA                AAA           &@@@   @@@*           AAA 
 AA                AAA          ,@@@     @@@,          AAA 
 AA                 AAA        .@@@  *%.  @@@          AA  
 AAAAAAAAAAAAAAAAAAAAAA        @@@# ,@@@, @@@%        AA.  
 AA                  AAA                             AA.   
 AA                   AAA                          AAA    
 AA                     AAA                      AAA     
 AA                       AAA                  AAAA       
 AA                  ..,   AAAAAAAAAAAAAAAAAAAAAA          
 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA         
 

=========================================================
                                      


* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.


*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
