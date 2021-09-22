(function() {
    document.querySelector('.navbar-holder').innerHTML = `
    <!-- Nav Bar Start -->
        <div class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container-fluid">
            <a href="index.html" class="navbar-brand">GS<span>BK</span></a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
    
            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div class="navbar-nav ml-auto">
                    <a href="index.html" class="nav-item nav-link">Trang chủ</a>
                    <a href="about.html" class="nav-item nav-link">Thông tin chi tiết</a>
                    <a href="activity.html" class="nav-item nav-link">Các hoạt động</a>
                    <!-- ##### No blog yet -->
                    <!-- <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Blog</a>
                        <div class="dropdown-menu">
                        <a href="blog.html" class="dropdown-item">Blog Grid</a>
                        <a href="single.html" class="dropdown-item">Blog Detail</a>
                        </div>
                    </div> -->
                    <a href="contact.html" class="nav-item nav-link">Liên hệ</a>
                </div>
            </div>
        </div>
    </div>
    <!-- Nav Bar End -->`;
    
    let index = parseInt(document.currentScript.getAttribute('index'));
    document.querySelectorAll('.navbar-nav')[0].children[index].classList.add('active');

})();