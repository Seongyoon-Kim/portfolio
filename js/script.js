(function () {
  // navbar
  if ($('.nav-link').length > 0) {
    $('.nav-link, .navbar-brand').on('click', function() {
      $('.nav-link.active').removeClass('active');
      $(this).addClass('active');
    });
  }

  // charts
  var chart1 = document.getElementById('chart1');
  var chart2 = document.getElementById('chart2');
  var chart3 = document.getElementById('chart3');
  var chart4 = document.getElementById('chart4');
  var options = {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: '#040404',
      bodyFontColor: '#fff',
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 60
  }
  var borderColor = 'transparent';
  var backgroundColor = ['#9a8ce3', '#3ac3c9', '#ffce03', '#ffa71c'];
  var hoverBackgroundColor = ['grey', 'grey', 'grey', 'grey'];
  var hoverBorderColor = 'rgba(234, 236, 244, 1)';

  if (chart1) {
    new Chart(chart1, {
      type: 'doughnut',
      options,
      data: {
        labels: ['HTML5', 'CSS', 'JavaScript'],
        datasets: [{
          data: [30, 40, 30],
          borderColor,
          backgroundColor,
          hoverBackgroundColor,
          hoverBorderColor
        }]
      }
    });
  }

  if (chart2) {
    new Chart(chart2, {
      type: 'doughnut',
      options,
      data: {
        labels: ['Java', 'JSP'],
        datasets: [{
          data: [90, 10],
          borderColor,
          backgroundColor,
          hoverBackgroundColor,
          hoverBorderColor
        }]
      }
    });
  }

  if (chart3) {
    new Chart(chart3, {
      type: 'doughnut',
      options,
      data: {
        labels: ['Oracle DB', 'SQL Developer'],
        datasets: [{
          data: [70, 30],
          borderColor,
          backgroundColor,
          hoverBackgroundColor,
          hoverBorderColor
        }]
      }
    });
  }

  if (chart4) {
    new Chart(chart4, {
      type: 'doughnut',
      options,
      data: {
        labels: ['GitHub'],
        datasets: [{
          data: [100],
          borderColor,
          backgroundColor,
          hoverBackgroundColor,
          hoverBorderColor
        }]
      }
    });
  }

  // carousel
  if ($('.owl-carousel').length > 0) {
    $('.owl-carousel').owlCarousel({
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      items: 1,
      autoplay: false,
      dots: true,
      loop: true
    });
  }

  // dark mode
  if ($('.btn-toggle').length > 0) {
    function switchMode(status) {
      $('link[media]').attr('media', status ? 'screen' : 'not screen');
    }

    $('.btn-toggle').on('click', function() {
      var useDarkMode = $(this).attr('data-use-dark-mode');
      switchMode(useDarkMode === 'true');
    });
  }
})();


var javaProject = document.getElementById('javaProject')
var p1 = document.getElementById('p1');
var n = 1;
var count = 0;
javaProject.onclick = function () {
  n++;
  count++;

  if (n == 2) {
    p1.innerHTML = '(이미지를 클릭하면 다음 이미지로 넘어갑니다.) <br><br> 위 화면은 직원들이 실시한 코로나 검사 결과를 관리자가 확인할 수 있도록 구현한 부분입니다. y/n으로 입력값을 받도록 만들었으며, y가 체크되어 있는지 관리자가 쉽게 확인하도록 하여 해당 직원에 대한 처우를 어떻게 할지 돕기 위해 구성하였습니다. <br><br>해당 화면을 구현하면서 직원들이 코로나 자가진단 문항을 체크할 때 y값을 입력했다면 해당 직원의 결과만 관리자가 받을 수 있도록 하는 부분에서 약간의 어려움을 겪었습니다. 파일 입출력에 대한 부분과 조건식을 잘 만든다면 다음에 비슷한 내용을 구현할 때 훨씬 수월하게 할 수 있을 것이라고 생각합니다.';
  } else if (n == 3) {
    p1.innerHTML = '(이미지를 클릭하면 다음 이미지로 넘어갑니다.) <br><br> 위 화면은 직원들의 연차 사용 여부를 월별로 파악할 수 있도록 구현한 부분입니다. 직원들의 연차 사용 여부를 기록하는 데이터 파일을 만든 뒤 직원이 새로 연차를 신청한다면 그 기록이 데이터 파일에 입력됩니다. <br><br>이후에, 조건식을 사용하여 해당 파일에 연차 사용한 직원이 있다면 사용 날짜와 해당 직원의 이름이 표시되도록 소스를 만들었습니다. 파일 입출력에 대한 구체적인 이해가 필요하다는 것을 알게 되었으며 조건식을 제대로 만들지 않으면 많은 오류가 발생한다는 사실을 배울 수 있었습니다.'
  } else if (n == 4) {
    p1.innerHTML = '(이미지를 클릭하면 다음 이미지로 넘어갑니다.) <br><br> 위 화면은 관리자가 직원들의 연차 신청서를 확인할 수 있도록 구현한 부분입니다. 신청 날짜, 이름, 연차 종류, 신청 날짜, 연차 사유를 대략적으로 파악할 수 있습니다. 파일 입출력에 대한 이해가 필수적이었고, 데이터가 순차적으로 입력되게 하는 부분에서 약간의 어려움이 있었습니다. <br><br>더미데이터가 어떤 방식으로 입력되어 있는지 파악하고 사용된 기호를 통해 데이터를 끊어서 배열에 저장되도록 했습니다. 기존 데이터를 배열에 쉽게 저장하도록 만들기 위해서는 데이터가 어떻게 구성되어 있는지 잘 파악하는것이 중요하다는 것을 배울 수 있었습니다.';
  } else if (n == 5) {
    p1.innerHTML = '(이미지를 클릭하면 다음 이미지로 넘어갑니다.) <br><br> 위 화면은 관리자가 공지사항 게시판에 등록되어 있던 기존 글을 수정할 수 있도록 구현한 부분입니다. 제목 및 내용을 새롭게 수정하면 기존 데이터의 내용을 새로 입력한 내용으로 바뀌게 됩니다. <br><br>이 부분을 구현하면서 흔히 사용하는 웹의 게시판 수정 기능처럼 특정 부분만 수정하는 기능을 넣지 못한 점이 아쉬웠습니다. 프로젝트를 완성한 이후로 해당 기능을 추가하기 위해 고민을 해봤지만 좋은 방법이 떠오르지 않았습니다. 어떻게 하면 수정 기능을 더 편하게 만들 수 있을지 지속적으로 고민하고 있습니다.';
  } else if (n == 6) {
    p1.innerHTML = '(이미지를 클릭하면 다음 이미지로 넘어갑니다.) <br><br> 위 화면은 관리자가 공지사항 게시판에 새로운 글을 등록할 수 있도록 구현한 부분입니다. 새로운 데이터를 작성하면 기존 데이터 파일에 그 데이터가 추가됩니다. <br><br>해당 부분을 구현하면서 새롭게 추가한 데이터가 기존 데이터의 맨 윗부분에 위치할 수 있도록 하는 조건식을 만들 때 어려움이 있었습니다. 다행히 기존 데이터에 있던 문서 번호를 활용하여 조건식을 만들었고 성공적으로 새로운 데이터의 위치를 원하는 방식으로 넣을 수 있었습니다.';
  } else if (n == 7) {
    p1.innerHTML = '(이미지를 클릭하면 다음 이미지로 넘어갑니다.) <br><br> 위 화면은 직원들이 직접 연차를 신청할 수 있도록 구현한 부분입니다. 사용 가능한 연차 일수를 확인할 수 있으며 연차의 종류도 선택할 수 있습니다. <br><br>또한 연차 사유를 입력하여 관리자가 연차 신청을 원활히 확인할 수 있도록 하였습니다. 새로 입력한 데이터가 기존 데이터와 똑같은 구조로 파일에 입력되도록 하는것이 중요하다는 것을 배울 수 있었습니다.';
  } else if (n == 8) {
    p1.innerHTML = '(이미지를 클릭하면 다음 이미지로 넘어갑니다.) <br><br> 위 화면은 직원들이 직접 데이터를 입력하면 예상 퇴직금을 확인할 수 있도록 구현한 부분입니다. 더미데이터가 필요한 부분은 아니어서 조건식만 만들면 됐기 때문에 큰 어려움은 없었습니다. <br><br>다만, 실제 퇴직금을 산정하는 계산식을 완벽하게 구현하지 못했기 때문에 정밀한 결과값을 얻을 수 없다는 점이 아쉬웠습니다. 정확한 계산식을 바탕으로 조건식을 구성한다면 기존에 구현되어 있는 퇴직금 계산기와 거의 비슷한 결과를 얻을 수  있다고 생각합니다.';
  } else if (n == 9) {
    p1.innerHTML = '(이미지를 클릭하면 다음 이미지로 넘어갑니다.) <br><br> 위 화면은 직원들이 이용할 수 있는 익명게시판을 구현한 부분입니다. 더미데이터로 기존 게시물의 내용을 먼저 만든 뒤 새로 작성하는 데이터가 맨 윗부분으로 입력될 수 있도록 만들었습니다. 이 부분에서도 새로 입력한 데이터가 맨 위로 입력되도록 하는것에서 약간의 어려움이 있었지만, 조건식을 잘 다듬어서 원하는 방식으로 구현할 수 있었습니다. <br><br>아쉬웠던 점은 인터넷에서 이용하는 게시판처럼 다음 페이지로 넘어가면 다른 게시글 목록을 보여주는 기능을 구현하지 못했다는 것입니다. 추후에 개선한다면 보다 많은 더미데이터를 구현하고 10개 단위로 페이지를 구성하여 다음 페이지를 볼 수 있는 기능을 구현하고 싶습니다.';
  } else if (n == 10) {
    p1.innerHTML = '(이미지를 클릭하면 다음 이미지로 넘어갑니다.) <br><br> 위 화면은 익명 게시판 글 하나를 선택하면 해당 게시글의 내용과 댓글을 확인할 수 있도록 구현한 부분입니다. 새로운 댓글을 남길 수도 있습니다. <br><br>하지만 디자인적으로 다소 미흡하다는 생각이 들었고 댓글을 남기기 위해서는 다른 메뉴로 이동해야 한다는 불편함이 있었습니다. 개선한다면 게시글을 보는 부분에서 바로 댓글을 남길 수 있도록 기능을 개선하고자 합니다.';
  } else if (n == 11) {
    p1.innerHTML = '(이미지를 클릭하면 다음 이미지로 넘어갑니다.) <br><br> 위 화면은 선택한 게시글에 새로운 댓글을 남길 수 있도록 구현한 부분입니다. 이전 화면에서 언급했던 것처럼 이렇게 다른 메뉴로 이동하여 댓글을 남기기보다 게시글을 확인하는 메뉴에서 직접 댓글을 남기는 기능을 추가한다면 이용자들의 불편을 훨씬 덜어줄 수 있을 것이라고 생각했습니다.';
  }

  if (n > 11) {
    alert('더이상 이미지가 없습니다.');
    n=1;
    p1.innerHTML = '(이미지를 클릭하면 다음 이미지로 넘어갑니다.)<br><br> 자바를 활용하여 사내 전산 시스템을 약식으로 콘솔 프로젝트 형태로 만들었습니다. 약 2~3주의 기간이 소요되었으며, 4명의 팀원들과 함께 완성하였습니다. <br><br>이 중에서 저는 익명 게시판과 공지사항 게시판을 맡았습니다. 게시판 형식의 더미데이터를 만든 뒤 파일 입출력을 활용하여 기존 게시글과 댓글을 보여줌과 동시에 새로 입력한 게시글과 댓글도 같이 연동되도록 만들었습니다.';
  }
  javaProject.src = "assets/img/javaProject" + n + ".png";

}

var oracleProject = document.images['oracleProject'];
var p2 = document.getElementById('p2');
var m = 1;
oracleProject.onclick = function () {
  m++;

  if (m == 2) {
    p2.innerHTML = '(이미지를 클릭하면 다음 이미지로 넘어갑니다.)<br><br> 위 화면은 데이터 ERD 모델을 구현한 부분입니다. 테이블 간의 관계를 연결하는 것이 쉽지 않았습니다. 기존에 생각했던 계층 구조가 잘 맞지 않아 여러번 수정 작업을 거쳤습니다. 처음에는 정적 테이블과 동적 테이블을 구분하여 생각하지 않았기 때문에 여러가지 오류가 발생했습니다. <br><br>이후로 천천히 정적인 테이블을 따로 구분하여 지정하였고, 정적 테이블을 큰 기준으로 삼아 동적 테이블을 천천히 연결하였습니다. 완벽한 ERD 모델이라고 할 순 없지만 기존에 추구했던 기능들을 거의 구현할 수 있는 바탕이 되었습니다.';
  } else if (m == 3) {
    p2.innerHTML = '(이미지를 클릭하면 다음 이미지로 넘어갑니다.)<br><br> 위 화면은 구현했던 프로시저의 일부분입니다. 원하는 데이터를 얻기 위해 비슷한 모양의 SELECT문을 여러번 작성했었지만, 프로시저를 구현함으로써 반복되는 코드를 줄일 수 있었습니다. <br><br>프로시저를 직접 구현해보기 전에는 프로시저의 필요성에 대해 잘 알지 못했으나 직접 데이터 처리하는 작업을 거치면서 프로시저의 중요성에 대해 배울 수 있었습니다. 데이터의 양이 훨씬 방대해진다면 프로시저는 필수라고 생각하게 된 계기가 되었습니다.';
  } else if (m == 4) {
    p2.innerHTML = '(이미지를 클릭하면 다음 이미지로 넘어갑니다.)<br><br> 위 화면은 구현했던 VIEW의 일부분입니다. 프로시저를 만들면서 데이터의 타입을 지정할 때 기존에 사용했던 SELECT문을 여러번 사용하다보니 코드가 지저분해지고 가독성이 떨어진다는 사실을 알게 되었습니다. <br><br>이후로 기존 SELECT문을 VIEW로 만든 뒤 데이터 타입을 지정할 때 뷰를 호출함으로써 코드가 간결해지고 가독성이 훨씬 좋아졌습니다. 프로시저처럼 VIEW도 기존에는 필요성을 제대로 느끼지 못했지만 직접 기능을 구현하는 과정 속에서 VIEW가 왜 필요한지 몸으로 느낄 수 있었습니다.';
  } else if (m == 5) {
    p2.innerHTML = '(이미지를 클릭하면 다음 이미지로 넘어갑니다.)<br><br> 위 화면은 구현했던 트리거의 일부분입니다. 데이터를 새롭게 추가하거나 삭제, 수정한 뒤 그 결과를 확실하게 확인함으로써 가독성을 높일 수 있었습니다. <br><br>기존에는 새로운 결과값이 반영되었다는 사실만 확인할 수 있었지만, 새로운 결과값이 어떤 형태를 띄고 있는지 직접 해당 테이블에 호출해야만 했습니다. 하지만 트리거를 만듬으로써 직접 테이블을 호출하여 확인하지 않아도 되었고 가독성과 생산성을 더 높일 수 있다는 점이 체감되었습니다.';
  } else if (m == 6) {
    p2.innerHTML = '(이미지를 클릭하면 다음 이미지로 넘어갑니다.)<br><br> 위 화면은 구현했던 함수의 일부분입니다. SELECT, 프로시저, 트리거보다는 작은 규모로 기능을 구현했습니다. 하지만 규모가 작더라도 함수를 만듬으로써 기존 테이블의 데이터를 건드리지 않아도 확인하고 싶은 형태의 결과값을 얻을 수 있다는 것을 배울 수 있었습니다.';
  } else if (m == 7) {
    p2.innerHTML = '(이미지를 클릭하면 다음 이미지로 넘어갑니다.)<br><br> 위 화면은 구현했던 인덱스의 일부분입니다. 구현했던 프로젝트에서는 데이터의 양이 방대하지 않았기 때문에 인덱스의 기능을 확실하게 체감할 수는 없었습니다. <br><br>하지만 학생들의 출결 데이터가 있는 테이블에 인덱스를 지정함으로써 출결과 관련된 데이터를 출력하는 구문에서 약간 더 빠르게 결과값을 얻을 수 있다는 것을 확인할 수 있었습니다. 이것보다 몇배는 많은 데이터를 처리할 때 인덱스를 사용한다면 인덱스의 장점을 더 확실히 느낄 수 있을 것입니다.';
  }

  
  if (m > 7) {
    alert('더이상 이미지가 없습니다.');
    m = 1;
    p2.innerHTML = '(이미지를 클릭하면 다음 이미지로 넘어갑니다.)<br><br> Oracle과 SQL Developer을 활용하여 교육센터 운영 프로그램을 만들었습니다. 2~3주 간에 걸쳐 4명의 팀원들과 함께 완성하였습니다. <br><br> 대부분은 팀원들과 분담하여 만들었으며 거의 다 완성하였을 때 저는 특히 기존의 SQL문을 프로시저로 만들어 SELECT로 호출할 때 조금 더 편리하게 할 수 있도록 리팩토링 하였으며 뷰를 생성함으로써 프로시저 안에서 쓰이는 코드를 줄일 수 있었습니다.. 또한, 다른 팀원들과 함께 만든 함수와 트리거, INDEX를 추가하여 프로그램을 더 매끄럽게 완성할 수 있었습니다.'
  }
  oracleProject.src = "assets/img/oracleProject" + m + ".png";
}