     
    $('#myModal').modal('show');
    $("#pdfbutton").click(function() {
        $('#myModal').modal('hide');
      }); 
      
      $('#pdf1_file').change(function(){
        var files = this.files;
        var file = URL.createObjectURL(files[0]);

        console.log(file)
        $("#pdf1").attr("src", file); 
      });
      $('#pdf2_file').change(function(){
        var files = this.files;
        var file1 = URL.createObjectURL(files[0]); 
        $("#pdf2").attr("src", file1);
      });
      $('#pdf2').on('scroll', function () {
        $('#pdf1').scrollTop($(this).scrollTop());
    });
    
  //   $(document).ready(function(){
  //     $(window.frames[0]).on('scroll', function() {
  //         $(window.frames[1]).scrollTop($(window.frames[0]).scrollTop());
  //     });
  //     $(window.frames[1]).on('scroll', function() {
  //         $(window.frames[0]).scrollTop($(window.frames[1]).scrollTop());
  //     });
  // });

    // const bindSyncScrolling = (one, two) => {
    //   let echo = false,
    //   sync = (one, two) => () => 
    //     (echo = !echo) && (
    //       one.scrollTop = two.scrollTop,
    //       one.scrollLeft = two.scrollLeft
    //     )
    //   ;
    //   two.onscroll = sync(one, two);
    //   one.onscroll = sync(two, one);
    // };
    
    // var lelfTextArea = $("#pdf1");
    // var rightTextArea = $("#pdf2")

    // lelfTextArea.textContent =
    // rightTextArea.textContent =
    //   textSource.textContent;
    
    // bindSyncScrolling(lelfTextArea, rightTextArea);

    $(document).ready(function(){
  
      var master = "pdf1"; // this is id div
      var slave = "pdf2"; // this is other id div
      var master_tmp;
      var slave_tmp;
      var timer;
        
      var sync = function ()
      {
        if($(this).attr('id') == slave)
        {
          master_tmp = master;
          slave_tmp = slave;
          master = slave;
          slave = master_tmp;
        }
        
        $("#" + slave).unbind("scroll");
        
        var percentage = this.scrollTop / (this.scrollHeight - this.offsetHeight);
        
        var x = percentage * ($("#" + slave).get(0).scrollHeight - $("#" + slave).get(0).offsetHeight);
    
        $("#" + slave).scrollTop(x);
        
        if(typeof(timer) !== 'undefind')
          clearTimeout(timer);
        
        timer = setTimeout(function(){ $("#" + slave).scroll(sync) }, 200)
      }
      
      $('#' + master + ', #' + slave).scroll(sync);
        
    });