function expandBanner(e){window.parent.postMessage({message:"expand-banner"},"*");$("#banner-content").addClass("stretched"),$("#banner-video").show(),$("#banner-video").attr("src","http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"),$("#banner-video").get(0).currentTime=0,$("#close-button").show()}function shrinkBanner(e){window.parent.postMessage({message:"shrink-banner"},"*"),$("#banner-content").removeClass("stretched"),$("#banner-video").attr("src",""),$("#banner-video").hide(),$("#close-button").hide()}$(document).ready(function(){$("#banner-condensed-bg").css("background-image","url(http://i0.sinaimg.cn/fashion/2016/0107/U3978P1503DT20160107145544.gif)"),$("#banner-expanded-bg").css("background-image","url(https://68.media.tumblr.com/8deca5058414d741af9c7b3674be440f/tumblr_obujcnB3kM1vy286ao1_500.gif)"),$("#banner-video").attr("poster","http://camendesign.com/code/video_for_everybody/poster.jpg")});