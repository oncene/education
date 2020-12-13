<div class="content-w"> 
<?php $cl_id = $this->db->get_where('enroll', array('student_id' => $this->session->userdata('login_user_id')))->row()->class_id;
  $section_id = $this->db->get_where('enroll', array('student_id' => $this->session->userdata('login_user_id')))->row()->section_id;?>
  <?php $section_id = $this->db->get_where('enroll', array('student_id' => $this->session->userdata('login_user_id')))->row()->section_id;?>
  <?php include 'fancy.php';?>
  <div class="header-spacer"></div>
    <div class="content-i">
      <div class="content-box">
        <div class="conty col-md-12">
          <div class="col-md-4" style="float:left;width:40%">        
            
            <!--<div class="col col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">-->
                
                <div class="aec-full-message-w">
                    <div class='col-md-4'>My Subjects</div>
                                    <div class="aec-full-message">
                                      <div class="container-fluid" style="background-color: #f2f4f8;">
                                        <div class="tab-content">
                                            <div class="tab-pane active" id="tabss">
                                              <div class="row">
                                              <?php 
                                                $this->db->order_by('subject_id', 'desc');
                                                $subjects = $this->db->get_where('subject', array('class_id' => $cl_id, 'section_id' => $section_id))->result_array();
                                                foreach($subjects as $row2):
                                              ?>
                                                <div class="col-md-12" style="margin-top: 20px;">
                                                    <div class="ui-block" data-mh="friend-groups-item">        
                                                    <div class="friend-item friend-groups">
                                                        <div class="friend-item-content">         
                                                        <div class="more">
                                                            <i class="icon-feather-more-horizontal"></i>
                                                            <ul class="more-dropdown">
                                                                <li><a href="<?php echo base_url();?>student/subject_dashboard/<?php echo base64_encode($row2['class_id']."-".$section_id."-".$row2['subject_id']);?>/"><?php echo get_phrase('dashboard');?></a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="friend-avatar">
                                                            <div class="author-thumb-dashboard">
                                                                <img src="<?php echo base_url();?>uploads/subject_icon/<?php echo $row2['icon'];?>" width="120px" style="background-color:#<?php echo $row2['color'];?>;padding:30px;border-radius:0px;">
                                                            </div>
                                                            <div class="author-content">
                                                                <a href="<?php echo base_url();?>student/subject_dashboard/<?php echo base64_encode($row2['class_id']."-".$section_id."-".$row2['subject_id']);?>/" class="h5 author-name"><?php echo $row2['name'];?></a><br><br>
                                                                <img src="<?php echo $this->crud_model->get_image_url('teacher', $row2['teacher_id']);?>" style="border-radius:50%;width:20px;"><span>  <?php echo $this->crud_model->get_name('teacher', $row2['teacher_id']);?></span>
                                                            </div>                          
                                                        </div>                        
                                                    </div>
                                                  </div>        
                                                </div>
                                              </div>
                                              <?php endforeach;?>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                        
                                            
                            			
                                            </div>
                                        </div> 
                                      
                <div class="col-md-8" style="float:left;width:50%">
                    <div class="aec-full-message-w">
                    <div class="container-fluid" style="background-color: #f2f4f8;">
                                                <div class="tab-content">
                                                    <div class="tab-pane active" id="tabss">
                                                        <div class="row">
                                                        <div class="col-md-12">
                            								<div class="element-box">
                            									<h5 class="form-header"><?php echo get_phrase('EXAM PERFORMANCE');?></h5>
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
                <div class="col-md-6" style="float:left;width:50%">
                    <div class="aec-full-message-w">    
                    <div class="container-fluid" style="background-color: #f2f4f8;">
                                                <div class="tab-content">
                                                    <div class="tab-pane active" id="tabss">
                                                        <div class="row">
                                                        <div class="col-md-12">
                            								<div class="element-box">
                            									<h5 class="form-header"><?php echo get_phrase('SUBJECT PERFORMANCE');?></h5>
                            									<canvas id="myChart-2" width="100" height="100"></canvas>
                            								</div>
                            							</div>
                            							</div>
                            						</div>
                            					</div>
                            				</div>
                    </div>
                </div>
                
                <div class="col-md-6" style="float:left;width:40%">
                    <div class="aec-full-message-w">
                    <div class="container-fluid" style="background-color: #f2f4f8;">
                                                <div class="tab-content">
                                                    <div class="tab-pane active" id="tabss">
                                                        <div class="row">
                                                        <div class="col-md-12">
                            								<div class="element-box">
                            									<h5 class="form-header"><?php echo get_phrase('Compliance With Activities');?></h5>
                            									<canvas id="myChart-3" width="100" height="100"></canvas>
                            								</div>
                            							</div>
                            							</div>
                            						</div>
                            					</div>
                            				</div>
                    </div>
                </div>
                
                <div class="header-spacer"></div>
                <!--</div>-->
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
        $.ajax({url:"<?php echo base_url();?>student/polls/response/",type:'POST',data:{answer:answer,poll_code:poll_code},success:function(result)
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
$exam_details = $this->db->get_where('online_exam', array('class_id' => $cl_id))->result_array();

$exam_name = array();
foreach($exam_details as $k=>$v){
    
    array_push($exam_name,$v['title']);
}


$exam_results_data = $this->db->get_where('online_exam_result', array('student_id' => $this->session->userdata('login_user_id')))->result_array();

$exam_results = array();
foreach($exam_results_data as $k=>$v){
    
    array_push($exam_results,$v['obtained_mark']);
}

?>
<script>
var ctx = document.getElementById("myChart-1");

var performanceData = {
  //labels: ['<?php echo $exam_name;?>'],
  labels: <?php echo json_encode($exam_name);?>,
  datasets: [{
    label: "Exam Performance",
    data: <?php echo json_encode($exam_results);?>,
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
$subject_details = $this->db->get_where('subject', array('class_id' => $cl_id))->result_array();

$subject_name = array();
foreach($subject_details as $k=>$v){
    
    array_push($subject_name,$v['name']);
}


$subject_results_data = $this->db->select_sum( 'mark_obtained' )->group_by('subject_id')->get_where('mark', array('student_id' => $this->session->userdata('login_user_id')))->result_array();


$subject_results = array();
foreach($subject_results_data as $key=>$val){
    
    array_push($subject_results,$val['mark_obtained']);
}

?>
<script>
var ctx2 = document.getElementById("myChart-2");

var subjectData = {
  labels: <?php echo json_encode($subject_name);?>,
  datasets: [{
    label: "Subject Performance",
    data: <?php echo json_encode($subject_results);?>,
  }]
};
 
var chartOptions2 = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var myChart = new Chart(ctx2, {
    type: 'bar',
    data: subjectData,
    options: chartOptions2
});
</script>

<?php
$delivered_details =$this->db->get('student')->result_array();
$abanded_details =$this->db->get('pending_users')->result_array();


?>

<script>

var ctx3 = document.getElementById("myChart-3");
var myChart = new Chart(ctx3, {
  type: 'pie',
  data: {
    labels: ["Abanded", "Delivered", "Rejected"],
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
      data: [1, <?php echo count($delivered_details);?>,<?php echo count($abanded_details);?>]
    }]
  }
});
</script>