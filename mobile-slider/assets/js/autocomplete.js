$(function() {
  var catFilter = [
    { value: "http://www.kaskus.co.id/forum/8",
       label: "Forum Video Aneh"
    },
    { value: "http://www.kaskus.co.id/forum/21",
       label: "The Lounge"
    },
    { value: "http://www.kaskus.co.id/forum/21",
       label: "Gambar Menggambar"
    },
    { value: "http://www.kaskus.co.id/forum/21",
       label: "Berita dan Politik"
    },
    { value: "http://www.kaskus.co.id/forum/21",
       label: "Story from the heart"
    },
    { value: "http://www.kaskus.co.id/forum/21",
       label: "Lounge Picture"
    },
    { value: "http://www.kaskus.co.id/forum/21",
       label: "Lounge Video"
    },
    { value: "http://www.kaskus.co.id/forum/21",
       label: "Reddit"
    }
  ];

  $( "#filter-cat" ).autocomplete({
    source: catFilter,
    appendTo: "#filter-content",
    select: function( event, ui ) { 
      window.location.href = ui.item.value;
    }
  });
});