<div class="content-w"> 
  <?php include 'fancy.php';?>
  <div class="header-spacer"></div>
    <div class="content-i">
      <div class="content-box">
        <div class="conty col-md-12">
          <div class="col-md-4" style="float:left;width:40%">        
            <!--<div class="col col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">-->
                
                 <?php 
              $this->db->group_by('class_id');
              $classes = $this->db->get_where('subject', array('teacher_id' => $this->session->userdata('login_user_id')))->result_array();
              foreach($classes as $cl):
            ?>
            <!--<div class="col col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">-->
            <div>
              <div class="ui-block" data-mh="friend-groups-item">        
                <div class="friend-item friend-groups">
                  <div class="friend-item-content">
                      <div class="more">
                        <i class="icon-feather-more-horizontal"></i>
                        <ul class="more-dropdown">
                          <li><a href="<?php echo base_url();?>teacher/cursos/<?php echo base64_encode($cl['class_id']);?>/"><?php echo get_phrase('my_subjects');?></a></li>
                        </ul>
                      </div>
                      <div class="friend-avatar">
                        <div class="author-thumb">
                          <img src="<?php echo base_url();?>uploads/<?php echo $this->db->get_where('settings', array('type' => 'logo'))->row()->description;?>" width="120px" style="background-color:#fff;padding:15px; border-radius:0px">
                        </div>
                        <div class="author-content">
                          <a href="<?php echo base_url();?>teacher/cursos/<?php echo base64_encode($cl['class_id']);?>/" class="h5 author-name"><?php echo $this->db->get_where('class', array('class_id' => $cl['class_id']))->row()->name;?></a>
                          <div class="country"><b><?php echo get_phrase('sections');?>:</b> <?php $sections = $this->db->get_where('section', array('class_id' => $cl['class_id']))->result_array(); foreach($sections as $sec):?> <?php echo $sec['name']." "."|";?><?php endforeach;?></div>
                        </div>
                      </div>        
                    </div>
                  </div>
                </div>
              </div>
              <?php endforeach;?>
                
                <div class="header-spacer"></div>
                <!--</div>-->
           
            </div>
            
            <div class="col-md-8" style="float:left;width:50%">
                    <div class="aec-full-message-w"> 
                    <div class="container-fluid" style="background-color: #f2f4f8;">
                                                <div class="tab-content">
                                                    <div class="tab-pane active" id="tabss">
                                                        <div class="row">
                                                        <div class="col-md-12">
                            								<div class="element-box">
                            									<h5 class="form-header"><?php echo get_phrase('Subject PERFORMANCE');?></h5>
                            									<canvas id="myChart-1" width="100" height="100"></canvas>
                            								</div>
                            							</div>
                            							</div>
                            						</div>
                            					</div>
                            				</div>
                    </div>
            </div>
            <div style="clear:both"></div>  
            <div class="col-md-6" style="float:left;width:40%">
                    <div class="aec-full-message-w">
                    <div class="container-fluid" style="background-color: #f2f4f8;">
                                                <div class="tab-content">
                                                    <div class="tab-pane active" id="tabss">
                                                        <div class="row">
                                                        <div class="col-md-12">
                            								<div class="element-box">
                            									<h5 class="form-header"><?php echo get_phrase('Student Performance');?></h5>
                            									<canvas id="myChart-3" width="100" height="100"></canvas>
                            								</div>
                            							</div>
                            							</div>
                            						</div>
                            					</div>
                            				</div>
                    </div>
                </div>
                
          </div>
          <a class="back-to-top" href="#">
            <img src="<?php echo base_url();?>style/olapp/svg-icons/back-to-top.svg" alt="arrow" class="back-icon">
          </a>
        </div>
      </div>
  </div>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.bundle.js"></script>
 
<script>
    var post_message        =   '<?php echo get_phrase('thank_you_polls');?>';
    function vote(poll_code)
    {
      answer = $('input[name=answer'+poll_code+']:checked').val();
      if(answer!="" && poll_code!="")
      {
        $.ajax({url:"<?php echo base_url();?>teacher/polls/response/",type:'POST',data:{answer:answer,poll_code:poll_code},success:function(result)
        {
          $('#panel').load(document.URL + ' #panel');
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 8000
            }); 
            Toast.fire({
            type: 'success',
            title: post_message
            })
        }});
      }else{
        alert('<?php echo get_phrase('select_an_option');?>');
      }
    }
</script>

<?php
$subject_details = $this->db->get_where('subject', array('teacher_id' => $this->session->userdata('login_user_id')))->result_array();

$subject_name = array();
$subject_results = array();
foreach($subject_details as $k=>$v){
    
    array_push($subject_name,$v['name']);
    
    $subject_results_data = $this->db->select_sum( 'mark_obtained' )->group_by('subject_id')->get_where('mark', array('subject_id'=>$v['subject_id']))->result_array();
    // echo "<pre>";
    // print_r($subject_results_data);
    // exit;
    array_push($subject_results,$subject_results_data[0]['mark_obtained']);
}



?>

<script>
var ctx = document.getElementById("myChart-1");

var performanceData = {
  labels: <?php echo json_encode($subject_name);?>,
  datasets: [{
    label: "Subject Performance",
    data: <?php echo json_encode($subject_results);?>,
  }]
};
 
var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var myChart = new Chart(ctx, {
    type: 'line',
    data: performanceData,
    options: chartOptions
});
</script>

<?php
$subject_details = $this->db->get_where('subject', array('teacher_id' => $this->session->userdata('login_user_id')))->result_array();

$subject_name = array();
$good_results = array();
$average_results = array();
$worst_results = array();
foreach($subject_details as $k=>$v){
    
    array_push($subject_name,$v['name']);
    
    $subject_results_data = $this->db->select_sum( 'mark_obtained' )->select('student_id')->group_by('subject_id')->get_where('mark', array('subject_id'=>$v['subject_id']))->result_array();
    
    if($subject_results_data[0]['mark_obtained']<35){
        array_push($worst_results,$subject_results_data[0]['student_id']);
    }
    elseif($subject_results_data[0]['mark_obtained']>=35&&$subject_results_data[0]['mark_obtained']<=75){
        array_push($average_results,$subject_results_data[0]['student_id']);
    }else{
        array_push($good_results,$subject_results_data[0]['student_id']);
    }
}



?>

<script>

var ctx3 = document.getElementById("myChart-3");
var myChart = new Chart(ctx3, {
  type: 'pie',
  data: {
    labels: ["Good", "Average", "Worst"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
         "#95a5a6"
        // "#9b59b6",
        // "#f1c40f",
        // "#e74c3c",
        // "#34495e"
      ],
      data: [<?php echo count($good_results);?>, <?php echo count($average_results);?>,<?php echo count($worst_results);?>]
    }]
  }
});
</script>