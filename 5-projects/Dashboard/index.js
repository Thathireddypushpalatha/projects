const ctx = document.getElementById("linechart");
      const ctx2 = document.getElementById("doughnutchart");
      const ctx3 = document.getElementById("polararea");
      Chart.defaults.color="white"


      new Chart(ctx, {
        type: "line",
        data: {
          labels: ["jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "Revenue",
              data: [20, 30, 15, 45, 30, 35],
              borderWidth: 2,
            },
            {
              label: "Customers",
              data: [30, 40, 25, 35, 20, 45],
              borderWidth: 2,
            },
            {
              label: "Total Sales",
              data: [15, 20, 30, 55, 45, 65],
              borderWidth: 2,
            },
          ],
        },
        options: {
            color:'white',
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      new Chart(ctx2, {
        type: "doughnut",
        data: {
          labels: ["jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "Revenue",
              data: [20, 30, 15, 45, 30, 35],
              borderWidth: 2,
            },
            
          ],
        },
        options: {
            color:'white',
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      new Chart(ctx3, {
        type: "polarArea",
        data: {
          labels: ["jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "Revenue",
              data: [20, 30, 15, 45, 30, 35],
              borderWidth: 2,
            },
            
          ],
        },
        options: {
            color:'white',
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
// LIGHT MODE 
      document.getElementById("light-mode").addEventListener("click",function(){
        Chart.defaults.color="#161616";
        document.getElementById("main").style.backgroundColor="#e1e0e0";
        document.getElementById("main-area").style.backgroundColor="#e1e0e0";
        document.getElementById("main-area").style.color="#161616";
        
        document.getElementById("sidebar").style.backgroundColor="white"
        document.getElementById("sidebar").style.color="#161616"

       let boxes= document.getElementsByClassName("box");
       for(let i=0;i<boxes.length;i++){
        boxes[i].style.backgroundColor="#e1e0e0";
        boxes[i].style.color="#161616";

       }
       document.getElementById("dark-mode").parentElement.style.display="block";
       document.getElementById("light-mode").parentElement.style.display="none";

      })
    //   DARK MODE 
      document.getElementById("dark-mode").addEventListener("click",function(){
        // Chart.defaults.color="#161616";
        document.getElementById("main").style.backgroundColor="#3d3d3d";
        document.getElementById("main-area").style.backgroundColor="#161616";
        document.getElementById("main-area").style.color="white";
        
        document.getElementById("sidebar").style.backgroundColor="#161616"
        document.getElementById("sidebar").style.color="white"

       let boxes= document.getElementsByClassName("box");
       for(let i=0;i<boxes.length;i++){
        boxes[i].style.backgroundColor="#3d3d3d";
        boxes[i].style.color="white";

       }
       document.getElementById("dark-mode").parentElement.style.display="none";
       document.getElementById("light-mode").parentElement.style.display="block";
      

      })