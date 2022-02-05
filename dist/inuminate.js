(()=>{"use strict";class t{constructor(t,e="https://inuminate.com"){this.siteId=t,this.url=e}track(){return new Promise(((t,e)=>{fetch(this.endpoint("api/hit"),{method:"POST",body:JSON.stringify({s:this.siteId,l:window.location,h:this.hostname(),r:this.referer()}),headers:{"Content-Type":"application/json"}}).then((e=>{t(e)})).catch((t=>{console.error("Unable to track hit"),console.log(t),e(t)}))}))}endpoint(t){let e=this.url;"/"!==e[e.length-1]&&(e+="/");let r=t;return r&&"/"===r[0]&&(r=r.substring(1)),e+r}referer(){let t="";return document.referrer.indexOf(this.hostname())<0&&(t=document.referrer),t}hostname(){return window.location.hostname}}!function(){var e;const r=Array.from(document.getElementsByTagName("script")).filter((t=>!!t.dataset.inuminateSite))[0];if(!r)return;const n=JSON.parse(null!==(e=r.dataset.inuminate)&&void 0!==e?e:"{}");new t(n.site,n.url).track()}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW51bWluYXRlLmpzIiwibWFwcGluZ3MiOiJtQkFBZSxNQUFNQSxFQUNqQkMsWUFBWUMsRUFBUUMsRUFBTSx5QkFDdEJDLEtBQUtGLE9BQVNBLEVBQ2RFLEtBQUtELElBQU1BLEVBRWZFLFFBQ0ksT0FBTyxJQUFJQyxTQUFRLENBQUNDLEVBQVNDLEtBQ3pCQyxNQUFNTCxLQUFLTSxTQUFTLFdBQVksQ0FDNUJDLE9BQVEsT0FDUkMsS0FBTUMsS0FBS0MsVUFBVSxDQUNqQkMsRUFBR1gsS0FBS0YsT0FDUmMsRUFBR0MsT0FBT0MsU0FDVkMsRUFBR2YsS0FBS2dCLFdBQ1JDLEVBQUdqQixLQUFLa0IsWUFFWkMsUUFBUyxDQUNMLGVBQWdCLHNCQUVyQkMsTUFBS0MsSUFDSmxCLEVBQVFrQixNQUNUQyxPQUFNQyxJQUNMQyxRQUFRQyxNQUFNLHVCQUNkRCxRQUFRRSxJQUFJSCxHQUNabkIsRUFBT21CLFNBSW5CakIsU0FBU3FCLEdBQ0wsSUFBSTVCLEVBQU1DLEtBQUtELElBQ2EsTUFBeEJBLEVBQUlBLEVBQUk2QixPQUFTLEtBQ2pCN0IsR0FBTyxLQUVYLElBQUk4QixFQUFLRixFQUlULE9BSE1FLEdBQWdCLE1BQVZBLEVBQUcsS0FDWEEsRUFBS0EsRUFBR0MsVUFBVSxJQUVmL0IsRUFBTThCLEVBRWpCWCxVQUNJLElBQUlhLEVBQVcsR0FJZixPQUhJQyxTQUFTRCxTQUFTRSxRQUFRakMsS0FBS2dCLFlBQWMsSUFDN0NlLEVBQVdDLFNBQVNELFVBRWpCQSxFQUVYZixXQUNJLE9BQU9ILE9BQU9DLFNBQVNFLFdDN0MvQixXQUNJLElBQUlrQixFQUNKLE1BQU1DLEVBQVNDLE1BQU1DLEtBQUtMLFNBQVNNLHFCQUFxQixXQUFXQyxRQUFPSixLQUFZQSxFQUFPSyxRQUFRQyxnQkFBZSxHQUNwSCxJQUFLTixFQUNELE9BRUosTUFBTU8sRUFBT2pDLEtBQUtrQyxNQUEwQyxRQUFuQ1QsRUFBS0MsRUFBT0ssUUFBUUksaUJBQThCLElBQVBWLEVBQWdCQSxFQUFLLE1BQ3ZFLElBQUl0QyxFQUFVOEMsRUFBS0csS0FBTUgsRUFBSzNDLEtBQ3RDRSxRQUVkNkMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL0B0aGVwdWJsaWNnb29kL2ludW1pbmF0ZS8uL3NyYy9JbnVtaW5hdGUudHMiLCJ3ZWJwYWNrOi8vQHRoZXB1YmxpY2dvb2QvaW51bWluYXRlLy4vc3JjL3RyYWNrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEludW1pbmF0ZSB7XG4gICAgY29uc3RydWN0b3Ioc2l0ZUlkLCB1cmwgPSAnaHR0cHM6Ly9pbnVtaW5hdGUuY29tJykge1xuICAgICAgICB0aGlzLnNpdGVJZCA9IHNpdGVJZDtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgfVxuICAgIHRyYWNrKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgZmV0Y2godGhpcy5lbmRwb2ludCgnYXBpL2hpdCcpLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICBzOiB0aGlzLnNpdGVJZCxcbiAgICAgICAgICAgICAgICAgICAgbDogd2luZG93LmxvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICBoOiB0aGlzLmhvc3RuYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHI6IHRoaXMucmVmZXJlcigpLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKHJlamVjdGVkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gdHJhY2sgaGl0Jyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVqZWN0ZWQpO1xuICAgICAgICAgICAgICAgIHJlamVjdChyZWplY3RlZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVuZHBvaW50KHVyaSkge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy51cmw7XG4gICAgICAgIGlmICh1cmxbdXJsLmxlbmd0aCAtIDFdICE9PSAnLycpIHtcbiAgICAgICAgICAgIHVybCArPSAnLyc7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGVwID0gdXJpO1xuICAgICAgICBpZiAoISFlcCAmJiBlcFswXSA9PT0gJy8nKSB7XG4gICAgICAgICAgICBlcCA9IGVwLnN1YnN0cmluZygxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXJsICsgZXA7XG4gICAgfVxuICAgIHJlZmVyZXIoKSB7XG4gICAgICAgIGxldCByZWZlcnJlciA9ICcnO1xuICAgICAgICBpZiAoZG9jdW1lbnQucmVmZXJyZXIuaW5kZXhPZih0aGlzLmhvc3RuYW1lKCkpIDwgMCkge1xuICAgICAgICAgICAgcmVmZXJyZXIgPSBkb2N1bWVudC5yZWZlcnJlcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVmZXJyZXI7XG4gICAgfVxuICAgIGhvc3RuYW1lKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lO1xuICAgIH1cbn1cbiIsImltcG9ydCBJbnVtaW5hdGUgZnJvbSAnLi9JbnVtaW5hdGUnO1xuZnVuY3Rpb24gaW5pdEludW1pbmF0ZSgpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3Qgc2NyaXB0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JykpLmZpbHRlcihzY3JpcHQgPT4gISFzY3JpcHQuZGF0YXNldC5pbnVtaW5hdGVTaXRlKVswXTtcbiAgICBpZiAoIXNjcmlwdCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKChfYSA9IHNjcmlwdC5kYXRhc2V0LmludW1pbmF0ZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ3t9Jyk7XG4gICAgY29uc3QgaW51bWluYXRlID0gbmV3IEludW1pbmF0ZShkYXRhLnNpdGUsIGRhdGEudXJsKTtcbiAgICBpbnVtaW5hdGUudHJhY2soKTtcbn1cbmluaXRJbnVtaW5hdGUoKTtcbiJdLCJuYW1lcyI6WyJJbnVtaW5hdGUiLCJjb25zdHJ1Y3RvciIsInNpdGVJZCIsInVybCIsInRoaXMiLCJ0cmFjayIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZmV0Y2giLCJlbmRwb2ludCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicyIsImwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImgiLCJob3N0bmFtZSIsInIiLCJyZWZlcmVyIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImNhdGNoIiwicmVqZWN0ZWQiLCJjb25zb2xlIiwiZXJyb3IiLCJsb2ciLCJ1cmkiLCJsZW5ndGgiLCJlcCIsInN1YnN0cmluZyIsInJlZmVycmVyIiwiZG9jdW1lbnQiLCJpbmRleE9mIiwiX2EiLCJzY3JpcHQiLCJBcnJheSIsImZyb20iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImZpbHRlciIsImRhdGFzZXQiLCJpbnVtaW5hdGVTaXRlIiwiZGF0YSIsInBhcnNlIiwiaW51bWluYXRlIiwic2l0ZSIsImluaXRJbnVtaW5hdGUiXSwic291cmNlUm9vdCI6IiJ9