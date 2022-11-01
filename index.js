

    let cele = document.getElementById('cel');
    let fahe = document.getElementById('fah');



    cele.addEventListener('input', function () {
      let c = this.value;
      let f = (c * 1.8) + 32;

      fahe.value = f;
    });

    fahe.addEventListener('input', function () {
      let f = this.value;
      let c = 5 / 9 * (f - 32);

      cele.value = c;
    });

    function chBg(color) {
      document.body.style.backgroundColor = color;
    }


    function hover() {
      alert("To change background color");
    }
