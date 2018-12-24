


$(function(){

  //FOr right SIde change color text

      $('.downloadBtn').hover(function(){

        $('.headingOfRht').css("color","#DC3545");


      },function(){
        $('.headingOfRht').css("color","#212529");
      });


      //FOr left SIde change color text on Button




      $('button').hover(function(){

        var getAttri = $(this).attr('name');

        //$(this).html("click");

        if(getAttri === "buttonY"){
          $('.stratTitleL').css("color","#FFC107");
        }
        else if(getAttri === "buttonB"){
          $('.stratTitleL').css("color","#007BFF");
        }
        else if(getAttri === "buttonG"){
          $('.stratTitleL').css("color","#28A745");
        }


      },function(){
        $('.stratTitleL').css("color","white");
        //$(this).html("");
      });



      //Stop the animation all smsall image

      $('.imagesRotate').hover(function(){

          $(this).removeClass('imagesRotate');

      },function(){
        $(this).addClass('imagesRotate');
      });


      console.log("print");

      // NOTE: For all Tabs
      // $('#allTabs').tabs({
      //       event:"click",
      //       show : "fadeIn",
      //       hide : "fadeOut",
      //       collapsible:true,
      //       active:0,
      //
      //
      //     });

      console.log("print");

      //test one thing


      // One page app start here


      console.log("WOw worked");






      // NOTE: Button start here every bloick click work
        $('a').on('click',function(e){

            e.preventDefault();

            var getHref = $(this).attr('href');

            // NOTE: Button check here

            if (getHref === "#heart") {

              //$('.MainDiv').css("display","none");
              $('.callB').addClass('testHideJsonButton');
                $('.MainDiv').addClass('testHideJsonData');
              //$('.callB').css("display","none");



                //STart the json here

                $.ajax({

              type : "GET",
              url : "http://sample009.000webhostapp.com/popular_heat.php",
              datatype : "json",
              success : function(data){

                $.each(JSON.parse(data),function(index,item){

                  $.each(item,function(key,value){


                    $('.clickTitile').hide();
                    //Start

                    $('<div />',{

                    class : "MainDiv",

                    html : "<div class='dataPart'>"+

                    "<h2 class='movieName'>"+

                    key + '  :  ' + value + '</br>' +"</h2>"+

                    "</div>"

                }).appendTo('.nhj');

                    //End

                    });
                    $('.nhj').append('<div  class="callB"><button>call</button></br></div>');

                    });

                  }



              });


                //End the json her


                console.log("heart");



            }

    //Second for Medcine ----------------------------

            if (getHref === "#medicine") {


                //$('.MainDiv').addClass('.testHideJson');
                //$('.callB').addClass('.testHideJson');

                $('.MainDiv').addClass('testHideJsonData');
              //$('.callB').css("display","none");
                $('.callB').addClass('testHideJsonButton');

                //STart the json here

                $.ajax({

              type : "GET",
              url : "https://sample009.000webhostapp.com/popular_medicine.php",
              datatype : "json",
              success : function(data){

                $.each(JSON.parse(data),function(index,item){

                  $.each(item,function(key,value){


                    $('.clickTitile').hide();
                    //Start

                    $('<div />',{

                    class : "MainDiv",

                    html : "<div class='dataPart'>"+

                    "<h2 class='movieName'>"+

                    key + '  :  ' + value + '</br>' +"</h2>"+

                    "</div>"

                }).appendTo('.nhj');

                    //End

                    });
                    $('.nhj').append('<div  class="callB"><button>call</button></br></div>');

                    });

                  }



              });


                //End the json here


                console.log("medicine");



            }

            // NOTE: Condition end here

            //THired for Gyne ----------------------------

                    if (getHref === "#Gyne") {


                        //$('.MainDiv').addClass('.testHideJson');
                        //$('.callB').addClass('.testHideJson');

                        $('.MainDiv').addClass('testHideJsonData');
                      //$('.callB').css("display","none");
                        $('.callB').addClass('testHideJsonButton');

                        //STart the json here

                        $.ajax({

                      type : "GET",
                      url : "http://sample009.000webhostapp.com/popular_gyne.php",
                      datatype : "json",
                      success : function(data){

                        $.each(JSON.parse(data),function(index,item){

                          $.each(item,function(key,value){


                            $('.clickTitile').hide();
                            //Start

                            $('<div />',{

                            class : "MainDiv",

                            html : "<div class='dataPart'>"+

                            "<h2 class='movieName'>"+

                            key + '  :  ' + value + '</br>' +"</h2>"+

                            "</div>"

                        }).appendTo('.nhj');

                            //End

                            });
                            $('.nhj').append('<div  class="callB"><button>call</button></br></div>');

                            });

                          }



                      });


                        //End the json here


                        console.log("Gyne");



                    }

                // NOTE: thE CONDITION end here

                //Fourth for Child ----------------------------

                        if (getHref === "#Child") {


                            //$('.MainDiv').addClass('.testHideJson');
                            //$('.callB').addClass('.testHideJson');

                            $('.MainDiv').addClass('testHideJsonData');
                          //$('.callB').css("display","none");
                            $('.callB').addClass('testHideJsonButton');

                            //STart the json here

                            $.ajax({

                          type : "GET",
                          url : "http://sample009.000webhostapp.com/popular_child.php",
                          datatype : "json",
                          success : function(data){

                            $.each(JSON.parse(data),function(index,item){

                              $.each(item,function(key,value){


                                $('.clickTitile').hide();
                                //Start

                                $('<div />',{

                                class : "MainDiv",

                                html : "<div class='dataPart'>"+

                                "<h2 class='movieName'>"+

                                key + '  :  ' + value + '</br>' +"</h2>"+

                                "</div>"

                            }).appendTo('.nhj');

                                //End

                                });
                                $('.nhj').append('<div  class="callB"><button>call</button></br></div>');

                                });

                              }



                          });


                            //End the json here


                            console.log("Gyne");



                        }

                    // NOTE: thE CONDITION end here

                    //Fifth for Medcine ----------------------------

                            if (getHref === "#NeuroMedicine") {


                                //$('.MainDiv').addClass('.testHideJson');
                                //$('.callB').addClass('.testHideJson');

                                $('.MainDiv').addClass('testHideJsonData');
                              //$('.callB').css("display","none");
                                $('.callB').addClass('testHideJsonButton');

                                //STart the json here

                                $.ajax({

                              type : "GET",
                              url : "http://sample009.000webhostapp.com/popular_neuromedcine.php",
                              datatype : "json",
                              success : function(data){

                                $.each(JSON.parse(data),function(index,item){

                                  $.each(item,function(key,value){


                                    $('.clickTitile').hide();
                                    //Start

                                    $('<div />',{

                                    class : "MainDiv",

                                    html : "<div class='dataPart'>"+

                                    "<h2 class='movieName'>"+

                                    key + '  :  ' + value + '</br>' +"</h2>"+

                                    "</div>"

                                }).appendTo('.nhj');

                                    //End

                                    });
                                    $('.nhj').append('<div  class="callB"><button>call</button></br></div>');

                                    });

                                  }



                              });


                                //End the json here


                                console.log("Gyne");



                            }

                        // NOTE: thE CONDITION end here

                        //Sixth for #NeuroSergery ----------------------------

                                if (getHref === "#NeuroSergery") {


                                    //$('.MainDiv').addClass('.testHideJson');
                                    //$('.callB').addClass('.testHideJson');

                                    $('.MainDiv').addClass('testHideJsonData');
                                  //$('.callB').css("display","none");
                                    $('.callB').addClass('testHideJsonButton');

                                    //STart the json here

                                    $.ajax({

                                  type : "GET",
                                  url : "http://sample009.000webhostapp.com/popular_neurosurgery.php",
                                  datatype : "json",
                                  success : function(data){

                                    $.each(JSON.parse(data),function(index,item){

                                      $.each(item,function(key,value){


                                        $('.clickTitile').hide();
                                        //Start

                                        $('<div />',{

                                        class : "MainDiv",

                                        html : "<div class='dataPart'>"+

                                        "<h2 class='movieName'>"+

                                        key + '  :  ' + value + '</br>' +"</h2>"+

                                        "</div>"

                                    }).appendTo('.nhj');

                                        //End

                                        });
                                        $('.nhj').append('<div  class="callB"><button>call</button></br></div>');

                                        });

                                      }



                                  });


                                    //End the json here


                                    console.log("Gyne");



                                }

                            // NOTE: thE CONDITION end here


                            //Seventh for ##PainMedicine ----------------------------

                                    if (getHref === "#PainMedicine") {


                                        //$('.MainDiv').addClass('.testHideJson');
                                        //$('.callB').addClass('.testHideJson');

                                        $('.MainDiv').addClass('testHideJsonData');
                                      //$('.callB').css("display","none");
                                        $('.callB').addClass('testHideJsonButton');

                                        //STart the json here

                                        $.ajax({

                                      type : "GET",
                                      url : "http://sample009.000webhostapp.com/popular_painmedicine.php",
                                      datatype : "json",
                                      success : function(data){

                                        $.each(JSON.parse(data),function(index,item){

                                          $.each(item,function(key,value){


                                            $('.clickTitile').hide();
                                            //Start

                                            $('<div />',{

                                            class : "MainDiv",

                                            html : "<div class='dataPart'>"+

                                            "<h2 class='movieName'>"+

                                            key + '  :  ' + value + '</br>' +"</h2>"+

                                            "</div>"

                                        }).appendTo('.nhj');

                                            //End

                                            });
                                            $('.nhj').append('<div  class="callB"><button>call</button></br></div>');

                                            });

                                          }



                                      });


                                        //End the json here


                                        console.log("Gyne");



                                    }

                                // NOTE: thE CONDITION end here

                                //Eight for ##Eurology ----------------------------

                                        if (getHref === "#Eurology") {


                                            //$('.MainDiv').addClass('.testHideJson');
                                            //$('.callB').addClass('.testHideJson');

                                            $('.MainDiv').addClass('testHideJsonData');
                                          //$('.callB').css("display","none");
                                            $('.callB').addClass('testHideJsonButton');

                                            //STart the json here

                                            $.ajax({

                                          type : "GET",
                                          url : "http://sample009.000webhostapp.com/popular_eurology.php",
                                          datatype : "json",
                                          success : function(data){

                                            $.each(JSON.parse(data),function(index,item){

                                              $.each(item,function(key,value){


                                                $('.clickTitile').hide();
                                                //Start

                                                $('<div />',{

                                                class : "MainDiv",

                                                html : "<div class='dataPart'>"+

                                                "<h2 class='movieName'>"+

                                                key + '  :  ' + value + '</br>' +"</h2>"+

                                                "</div>"

                                            }).appendTo('.nhj');

                                                //End

                                                });
                                                $('.nhj').append('<div  class="callB"><button>call</button></br></div>');

                                                });

                                              }



                                          });


                                            //End the json here


                                            console.log("Gyne");



                                        }

                                    // NOTE: thE CONDITION end here

                                    //Eight for ##Diabeties ----------------------------

                                            if (getHref === "#Diabeties") {


                                                //$('.MainDiv').addClass('.testHideJson');
                                                //$('.callB').addClass('.testHideJson');

                                                $('.MainDiv').addClass('testHideJsonData');
                                              //$('.callB').css("display","none");
                                                $('.callB').addClass('testHideJsonButton');

                                                //STart the json here

                                                $.ajax({

                                              type : "GET",
                                              url : "http://sample009.000webhostapp.com/popular_diabestieshormune.php",
                                              datatype : "json",
                                              success : function(data){

                                                $.each(JSON.parse(data),function(index,item){

                                                  $.each(item,function(key,value){


                                                    $('.clickTitile').hide();
                                                    //Start

                                                    $('<div />',{

                                                    class : "MainDiv",

                                                    html : "<div class='dataPart'>"+

                                                    "<h2 class='movieName'>"+

                                                    key + '  :  ' + value + '</br>' +"</h2>"+

                                                    "</div>"

                                                }).appendTo('.nhj');

                                                    //End

                                                    });
                                                    $('.nhj').append('<div  class="callB"><button>call</button></br></div>');

                                                    });

                                                  }



                                              });


                                                //End the json here


                                                console.log("Gyne");



                                            }

                                        // NOTE: thE CONDITION end here


                                        //Eight for ##HeadNeck ----------------------------

                                                if (getHref === "#HeadNeck") {


                                                    //$('.MainDiv').addClass('.testHideJson');
                                                    //$('.callB').addClass('.testHideJson');

                                                    $('.MainDiv').addClass('testHideJsonData');
                                                  //$('.callB').css("display","none");
                                                    $('.callB').addClass('testHideJsonButton');

                                                    //STart the json here

                                                    $.ajax({

                                                  type : "GET",
                                                  url : "http://sample009.000webhostapp.com/popular_head_neck.php",
                                                  datatype : "json",
                                                  success : function(data){

                                                    $.each(JSON.parse(data),function(index,item){

                                                      $.each(item,function(key,value){


                                                        $('.clickTitile').hide();
                                                        //Start

                                                        $('<div />',{

                                                        class : "MainDiv",

                                                        html : "<div class='dataPart'>"+

                                                        "<h2 class='movieName'>"+

                                                        key + '  :  ' + value + '</br>' +"</h2>"+

                                                        "</div>"

                                                    }).appendTo('.nhj');

                                                        //End

                                                        });
                                                        $('.nhj').append('<div  class="callB"><button>call</button></br></div>');

                                                        });

                                                      }



                                                  });


                                                    //End the json here


                                                    console.log("Gyne");



                                                }

                                            // NOTE: thE CONDITION end here



        });






});


// NOTE: For calculator



  console.log("Js orking");


    
