(()=>{"use strict";class t{constructor(t,e){this.siteId=t,this.url=null!=e?e:"https://inuminate.com"}track(){return new Promise(((t,e)=>{fetch(this.endpoint("api/hit"),{method:"POST",body:JSON.stringify({s:this.siteId,l:window.location.href,p:window.location.protocol,h:this.hostname(),r:this.referer()}),headers:{"Content-Type":"application/json"}}).then((e=>{t(e)})).catch((t=>{console.error("Unable to track hit"),console.log(t),e(t)}))}))}endpoint(t){let e=this.url;"/"!==e[e.length-1]&&(e+="/");let n=t;return n&&"/"===n[0]&&(n=n.substring(1)),e+n}referer(){let t="";return document.referrer.indexOf(this.hostname())<0&&(t=document.referrer),t}hostname(){return window.location.hostname}}!function(){var e;const n=Array.from(document.getElementsByTagName("script")).filter((t=>!!t.dataset.inuminateSite))[0];if(!n)return;const r=n.dataset.inuminateSite,i=null!==(e=n.dataset.inuminateUrl)&&void 0!==e?e:null;new t(r,i).track()}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW51bWluYXRlLmpzIiwibWFwcGluZ3MiOiJtQkFBZSxNQUFNQSxFQUtqQkMsWUFBYUMsRUFBZ0JDLEdBQ3pCQyxLQUFLRixPQUFTQSxFQUNkRSxLQUFLRCxJQUFNQSxNQUFBQSxFQUFBQSxFQUFPLHdCQUd0QkUsUUFDSSxPQUFPLElBQUlDLFNBQVEsQ0FBQ0MsRUFBU0MsS0FFekJDLE1BQU1MLEtBQUtNLFNBQVMsV0FBWSxDQUM1QkMsT0FBUSxPQUNSQyxLQUFNQyxLQUFLQyxVQUFVLENBQ2pCQyxFQUFHWCxLQUFLRixPQUNSYyxFQUFHQyxPQUFPQyxTQUFTQyxLQUNuQkMsRUFBR0gsT0FBT0MsU0FBU0csU0FDbkJDLEVBQUdsQixLQUFLbUIsV0FDUkMsRUFBR3BCLEtBQUtxQixZQUVaQyxRQUFTLENBQ0wsZUFBZ0Isc0JBRXJCQyxNQUFLQyxJQUNKckIsRUFBUXFCLE1BQ1RDLE9BQU1DLElBQ0xDLFFBQVFDLE1BQU0sdUJBQ2RELFFBQVFFLElBQUlILEdBQ1p0QixFQUFPc0IsU0FNbkJwQixTQUFVd0IsR0FDTixJQUFJL0IsRUFBTUMsS0FBS0QsSUFDWSxNQUF2QkEsRUFBSUEsRUFBSWdDLE9BQVEsS0FDaEJoQyxHQUFPLEtBR1gsSUFBSWlDLEVBQUtGLEVBS1QsT0FKTUUsR0FBZ0IsTUFBVkEsRUFBRyxLQUNYQSxFQUFLQSxFQUFHQyxVQUFVLElBR2ZsQyxFQUFNaUMsRUFHakJYLFVBRUksSUFBSWEsRUFBVyxHQUtmLE9BSklDLFNBQVNELFNBQVNFLFFBQVFwQyxLQUFLbUIsWUFBYyxJQUM3Q2UsRUFBV0MsU0FBU0QsVUFHakJBLEVBR1hmLFdBQ0ksT0FBT04sT0FBT0MsU0FBU0ssV0MzRC9CLFcsTUFDSSxNQUFNa0IsRUFBU0MsTUFBTUMsS0FBS0osU0FBU0sscUJBQXFCLFdBQVdDLFFBQU9KLEtBQVlBLEVBQU9LLFFBQVFDLGdCQUFlLEdBRXBILElBQUtOLEVBQ0QsT0FHSixNQUFNTyxFQUFPUCxFQUFPSyxRQUFRQyxjQUN0QjVDLEVBQWlDLFFBQTNCLEVBQUFzQyxFQUFPSyxRQUFRRyxvQkFBWSxRQUFJLEtBRXpCLElBQUlqRCxFQUFVZ0QsRUFBTTdDLEdBQzVCRSxRQUlkNkMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL0B0aGVwdWJsaWNnb29kL2ludW1pbmF0ZS8uL3NyYy9JbnVtaW5hdGUudHMiLCJ3ZWJwYWNrOi8vQHRoZXB1YmxpY2dvb2QvaW51bWluYXRlLy4vc3JjL3RyYWNrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEludW1pbmF0ZSB7XG5cbiAgICBzaXRlSWQ6IHN0cmluZztcbiAgICB1cmw6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yIChzaXRlSWQ6IHN0cmluZywgdXJsPzogc3RyaW5nfG51bGwpIHtcbiAgICAgICAgdGhpcy5zaXRlSWQgPSBzaXRlSWQ7XG4gICAgICAgIHRoaXMudXJsID0gdXJsID8/ICdodHRwczovL2ludW1pbmF0ZS5jb20nO1xuICAgIH1cblxuICAgIHRyYWNrICgpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgICBmZXRjaCh0aGlzLmVuZHBvaW50KCdhcGkvaGl0JyksIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIHM6IHRoaXMuc2l0ZUlkLFxuICAgICAgICAgICAgICAgICAgICBsOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgICAgICAgICAgcDogd2luZG93LmxvY2F0aW9uLnByb3RvY29sLFxuICAgICAgICAgICAgICAgICAgICBoOiB0aGlzLmhvc3RuYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHI6IHRoaXMucmVmZXJlcigpLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKVxuICAgICAgICAgICAgfSkuY2F0Y2gocmVqZWN0ZWQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byB0cmFjayBoaXQnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZWplY3RlZCk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KHJlamVjdGVkKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZW5kcG9pbnQgKHVyaTogc3RyaW5nfG51bGwpOiBzdHJpbmcge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy51cmw7XG4gICAgICAgIGlmICh1cmxbdXJsLmxlbmd0aCAtMV0gIT09ICcvJykge1xuICAgICAgICAgICAgdXJsICs9ICcvJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBlcCA9IHVyaTtcbiAgICAgICAgaWYgKCEhZXAgJiYgZXBbMF0gPT09ICcvJykge1xuICAgICAgICAgICAgZXAgPSBlcC5zdWJzdHJpbmcoMSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXJsICsgZXA7XG4gICAgfVxuXG4gICAgcmVmZXJlciAoKTogc3RyaW5nfG51bGwge1xuXG4gICAgICAgIGxldCByZWZlcnJlciA9ICcnO1xuICAgICAgICBpZiAoZG9jdW1lbnQucmVmZXJyZXIuaW5kZXhPZih0aGlzLmhvc3RuYW1lKCkpIDwgMCkge1xuICAgICAgICAgICAgcmVmZXJyZXIgPSBkb2N1bWVudC5yZWZlcnJlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWZlcnJlcjtcbiAgICB9XG5cbiAgICBob3N0bmFtZSAoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcbiAgICB9XG59IiwiaW1wb3J0IEludW1pbmF0ZSBmcm9tICcuL0ludW1pbmF0ZSc7XG5cbmZ1bmN0aW9uIGluaXRJbnVtaW5hdGUoKSB7XG4gICAgY29uc3Qgc2NyaXB0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JykpLmZpbHRlcihzY3JpcHQgPT4gISFzY3JpcHQuZGF0YXNldC5pbnVtaW5hdGVTaXRlKVswXTtcblxuICAgIGlmICghc2NyaXB0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzaXRlID0gc2NyaXB0LmRhdGFzZXQuaW51bWluYXRlU2l0ZSE7XG4gICAgY29uc3QgdXJsID0gc2NyaXB0LmRhdGFzZXQuaW51bWluYXRlVXJsID8/IG51bGw7XG5cbiAgICBjb25zdCBpbnVtaW5hdGUgPSBuZXcgSW51bWluYXRlKHNpdGUsIHVybCk7XG4gICAgaW51bWluYXRlLnRyYWNrKCk7XG5cbn1cblxuaW5pdEludW1pbmF0ZSgpO1xuIl0sIm5hbWVzIjpbIkludW1pbmF0ZSIsImNvbnN0cnVjdG9yIiwic2l0ZUlkIiwidXJsIiwidGhpcyIsInRyYWNrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmZXRjaCIsImVuZHBvaW50IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzIiwibCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInAiLCJwcm90b2NvbCIsImgiLCJob3N0bmFtZSIsInIiLCJyZWZlcmVyIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImNhdGNoIiwicmVqZWN0ZWQiLCJjb25zb2xlIiwiZXJyb3IiLCJsb2ciLCJ1cmkiLCJsZW5ndGgiLCJlcCIsInN1YnN0cmluZyIsInJlZmVycmVyIiwiZG9jdW1lbnQiLCJpbmRleE9mIiwic2NyaXB0IiwiQXJyYXkiLCJmcm9tIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJmaWx0ZXIiLCJkYXRhc2V0IiwiaW51bWluYXRlU2l0ZSIsInNpdGUiLCJpbnVtaW5hdGVVcmwiLCJpbml0SW51bWluYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==