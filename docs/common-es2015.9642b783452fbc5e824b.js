(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(e,t,i){"use strict";i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return c})),i.d(t,"c",(function(){return s})),i.d(t,"d",(function(){return o})),i.d(t,"e",(function(){return a}));const n={getEngine(){const e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const t=this.getEngine();if(!t)return;const i=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:i})},notification(e){const t=this.getEngine();if(!t)return;const i=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:i})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},s=()=>{n.selection()},r=()=>{n.selectionStart()},c=()=>{n.selectionChanged()},a=()=>{n.selectionEnd()},o=e=>{n.impact(e)}},"6i10":function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));const n={bubbles:{dur:1e3,circles:9,fn:(e,t,i)=>{const n=e*t/i-e+"ms",s=2*Math.PI*t/i;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(e,t,i)=>{const n=t/i,s=e*n-e+"ms",r=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":s}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,t)=>({r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,t,i)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/i-e+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(e,t,i)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/i-e+"ms"}})}}},Kj3r:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var n=i("7o/Q"),s=i("D0XW");function r(e,t=s.a){return i=>i.lift(new c(e,t))}class c{constructor(e,t){this.dueTime=e,this.scheduler=t}call(e,t){return t.subscribe(new a(e,this.dueTime,this.scheduler))}}class a extends n.a{constructor(e,t,i){super(e),this.dueTime=t,this.scheduler=i,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(e){this.clearDebounce(),this.lastValue=e,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(o,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){const{lastValue:e}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(e)}}clearDebounce(){const e=this.debouncedSubscription;null!==e&&(this.remove(e),e.unsubscribe(),this.debouncedSubscription=null)}}function o(e){e.debouncedNext()}},NqGI:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return s}));const n=async(e,t,i,n,s)=>{if(e)return e.attachViewToDom(t,i,s,n);if("string"!=typeof i&&!(i instanceof HTMLElement))throw new Error("framework delegate is missing");const r="string"==typeof i?t.ownerDocument&&t.ownerDocument.createElement(i):i;return n&&n.forEach(e=>r.classList.add(e)),s&&Object.assign(r,s),t.appendChild(r),r.componentOnReady&&await r.componentOnReady(),r},s=(e,t)=>{if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},PYW1:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var n=i("ePDZ"),s=i("ItpF"),r=i("2c9M");const c=(e,t)=>{let i,c;const a=(e,n,s)=>{if("undefined"==typeof document)return;const r=document.elementFromPoint(e,n);r&&t(r)?r!==i&&(u(),o(r,s)):u()},o=(e,t)=>{i=e,c||(c=i);const s=i;Object(n.g)(()=>s.classList.add("ion-activated")),t()},u=(e=!1)=>{if(!i)return;const t=i;Object(n.g)(()=>t.classList.remove("ion-activated")),e&&c!==i&&i.click(),i=void 0};return Object(s.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:e=>a(e.currentX,e.currentY,r.a),onMove:e=>a(e.currentX,e.currentY,r.b),onEnd:()=>{u(!0),Object(r.e)(),c=void 0}})}},apZm:function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var n=i("ALmS"),s=i("vkgz"),r=i("zx2A");class c{constructor(e){this.notifier=e}call(e,t){const i=new a(e),n=Object(r.c)(this.notifier,new r.a(i));return n&&!i.seenValue?(i.add(n),t.subscribe(i)):i}}class a extends r.b{constructor(e){super(e),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}var o=i("8Y7J"),u=i("nbgS");const l=n.gql`
  mutation StartVisitCheckIn($place_uuid: uuid! = "875b4319-5b1c-44ef-9950-bc6004c4f77a", $visitor_uuid: uuid! = "") {
    insert_visit_one(object: { place_uuid: $place_uuid, visitor_uuid: $visitor_uuid }) {
      checked_in_at
      visitor_uuid
      visitor {
        visitor_first_name
      }
    }
  }
`,d=n.gql`
  mutation CheckOutVisitor(
    $place_uuid: uuid! = "875b4319-5b1c-44ef-9950-bc6004c4f77a"
    $visitor_uuid: uuid! = "e3f2445c-c497-4f3f-a43a-a8256da64fd7"
    $checked_in_at: timestamptz! = "2020-08-10T11:40:26.119331+00:00"
  ) {
    update_visit_by_pk(
      pk_columns: { place_uuid: $place_uuid, visitor_uuid: $visitor_uuid, checked_in_at: $checked_in_at }
      _set: { checked_out_at: "now()" }
    ) {
      checked_out_at
    }
  }
`;let h=(()=>{class e{constructor(e){this.apollo=e}get currentPlaceUUID(){var e;return null===(e=this.currentDetails)||void 0===e?void 0:e.placeUUID}get currentVisitorUUID(){var e;return null===(e=this.currentDetails)||void 0===e?void 0:e.visitorUUID}get currentCheckInDateTime(){var e;return null===(e=this.currentDetails)||void 0===e?void 0:e.checkInDateTime}createCheckInVisitor(e,t){return console.log("CheckInOutService -> constructor -> place_uuid",e),console.log("CheckInOutService -> constructor -> visitor_uuid",t),this.apollo.mutate({mutation:l,variables:{place_uuid:e,visitor_uuid:t}})}updateCheckOutVisitor(e,t,i){console.log("CheckInOutService -> constructor -> checked_in_at",i);const n=this.apollo.mutate({mutation:d,variables:{place_uuid:e,visitor_uuid:t,checked_in_at:i}});return n.pipe(Object(s.a)(e=>{})),n}saveProgressiveForm(e){this.currentDetails=e,localStorage.setItem("currentCheckIn",JSON.stringify(e))}saveCheckIn(e,t){const i=e.pipe(Object(s.a)(e=>{this.currentDetails=e,localStorage.setItem("currentCheckIn",JSON.stringify(e))})).pipe((n=t,e=>e.lift(new c(n))));var n;return i.subscribe(e=>{console.log("CheckInOutService -> saveCheckIn -> details",e,JSON.stringify(e))},e=>{console.log("CheckInOutService -> saveCheckIn -> error",e)},()=>{console.log("CheckInOutService -> saveCheckIn -> currentDetails completion")}),i}getCheckIn(){return this.currentDetails}resetCheckIn(){this.currentDetails=void 0}}return e.\u0275fac=function(t){return new(t||e)(o.Tb(u.b))},e.\u0275prov=o.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},hcCc:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return n})),i.d(t,"d",(function(){return a}));const n=(e,t)=>null!==t.closest(e),s=e=>"string"==typeof e&&e.length>0?{"ion-color":!0,["ion-color-"+e]:!0}:void 0,r=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>t[e]=!0),t},c=/^[a-z][a-z0-9+\-.]*:/,a=async(e,t,i,n)=>{if(null!=e&&"#"!==e[0]&&!c.test(e)){const s=document.querySelector("ion-router");if(s)return null!=t&&t.preventDefault(),s.push(e,i,n)}return!1}},klIw:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));const n={email:[{type:"required",message:"Email is required."},{type:"pattern",message:"Enter a valid email."}],password:[{type:"required",message:"Password is required."},{type:"minlength",message:"Password must be at least 6 characters long."}]}},lyr6:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var n=i("ALmS"),s=i("vkgz"),r=i("eueu"),c=i("8Y7J"),a=i("nbgS");const o=n.gql`
  # Safety enforced by custom permissions for the organiser's UID own list. JWT + header.
  query GetAdminPlaces {
    place(limit: 20, offset: 0) {
      place_name
      place_address
      place_uuid
    }
  }
`,u=n.gql`
  subscription PlaceVisitors(
    $placeUUIDEquals: uuid! = "b8a4155c-6148-4e25-a1d2-df29d67911e4"
    $checkedInGreaterThan: timestamptz! = "2020-08-01T13:51:06.156723+00:00"
  ) {
    place(where: { place_uuid: { _eq: $placeUUIDEquals } }) {
      place_name
      place_capacity
      place_address
      place_description
      visits_aggregate(where: { place_uuid: { _eq: $placeUUIDEquals }, checked_in_at: { _gte: $checkedInGreaterThan } }) {
        aggregate {
          count(columns: visitor_uuid)
        }
      }
      visits(
        order_by: { checked_in_at: desc_nulls_first, checked_out_at: desc_nulls_first }
        limit: 300
        where: { place_uuid: { _eq: $placeUUIDEquals }, checked_in_at: { _gte: $checkedInGreaterThan } }
      ) {
        checked_in_at
        checked_out_at
        visitor {
          visitor_uuid
          visitor_first_name
          visitor_last_name
          visitor_phone
          visitor_email
        }
      }
    }
  }
`,l=n.gql`
  mutation UpdateBulkCheckOutVisits($placeUUIDEquals: uuid = "") {
    update_visit(where: { place_uuid: { _eq: $placeUUIDEquals } }, _set: { checked_out_at: "now()" }) {
      affected_rows
      returning {
        visit_uuid
        checked_out_at
        visitor {
          visitor_uuid
          visitor_first_name
        }
      }
    }
  }
`;let d=(()=>{class e{constructor(e){this.apollo=e}getVisitorsByPlaceUUID(e,t=Object(r.d)()){return this.apollo.subscribe({query:u,variables:{placeUUIDEquals:e,checkedInGreaterThan:t}})}filterVisitsNotCheckedOut(e){return e.filter(e=>!e.checked_out_at)}updateBulkCheckOut(e){console.log("PlaceAdminService:: updateBulkCheckOut()",e);const t=this.apollo.mutate({mutation:l,variables:{placeUUIDEquals:e}});return t.pipe(Object(s.a)(e=>{console.log("updateBulkCheckOut a",e)})),t}getAdminPlaceListByAuthPermissions(){return this.apollo.query({query:o})}}return e.\u0275fac=function(t){return new(t||e)(c.Tb(a.b))},e.\u0275prov=c.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);