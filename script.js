let cartCount = 0;

  function addToCart(name) {
    cartCount++;
    document.getElementById('cartCount').textContent = cartCount;
    const toast = document.getElementById('cartToast');
    document.getElementById('cartToastMsg').textContent = '"' + name + '" added to cart';
    toast.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(function() { toast.classList.remove('show'); }, 2800);
  }

  function openCart() {
    alert('You have ' + cartCount + ' item(s) in your cart.');
  }

  document.querySelectorAll('.filter-tab').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-tab').forEach(function(b) { b.classList.remove('active'); });
      this.classList.add('active');
    });
  });

  document.querySelectorAll('a[href="#products"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
  });