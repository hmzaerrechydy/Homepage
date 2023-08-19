let navbar = ` 
<nav class="navbar navbar-expand-sm bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="./index.html">Hamza Errechydy</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./blog.html">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/hmzaerrechydy" target="_blank">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./about.html">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>`;


document.body.insertAdjacentHTML("afterbegin", navbar);

let head = `
        <title>
            Hamza Errechydy
        </title>
        <link rel="stylesheet" href="style.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">`; 

document.head.insertAdjacentHTML("afterbegin", head);

