import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CandidatureService} from '../../shared/services/candidature.service';

declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit, AfterViewInit {
  cvId: any;
  offreId: any;
  domain = 'meet.jit.si'; // For self hosted use your domain
  room: any;
  options: any;
  api: any;
  user: any;

  // For Custom Controls
  isAudioMuted = false;
  isVideoMuted = false;

  constructor(
    private router: Router,
    private candidatureService: CandidatureService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.cvId = this.activatedRoute.snapshot.paramMap.get('cvId');
    this.offreId = this.activatedRoute.snapshot.paramMap.get('offreId');


  }

  ngAfterViewInit(): void {
    this.candidatureService.getById(this.cvId, this.offreId).subscribe(res => {
      console.log(res)

      const room = res.offre.titre + '-' + this.cvId + '-' + this.offreId;
      console.log(room)
      this.room = room; // Set your room name
      let username;
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser.raisonSocial) {
        username = currentUser.raisonSocial;
      } else {
        username = currentUser.nom + ' ' + currentUser.prenom;
      }
      this.user = {
        name: username // Set your username
      };
      this.options = {
        roomName: this.room,
        width: 900,
        height: 500,
        configOverwrite: {prejoinPageEnabled: false},
        interfaceConfigOverwrite: {
          // overwrite interface properties
        },
        parentNode: document.querySelector('#jitsi-iframe'),
        userInfo: {
          displayName: this.user.name
        }
      };

      this.api = new JitsiMeetExternalAPI(this.domain, this.options);

      // Event handlers
      this.api.addEventListeners({
        readyToClose: this.handleClose,
        participantLeft: this.handleParticipantLeft,
        participantJoined: this.handleParticipantJoined,
        videoConferenceJoined: this.handleVideoConferenceJoined,
        videoConferenceLeft: this.handleVideoConferenceLeft,
        audioMuteStatusChanged: this.handleMuteStatus,
        videoMuteStatusChanged: this.handleVideoStatus
      });

    }, ex => console.log(ex));


  }

  handleClose = () => {
    console.log('handleClose');
  }
  handleParticipantLeft = async (participant: any) => {
    console.log('handleParticipantLeft', participant); // { id: "2baa184e" }
    const data = await this.getParticipants();
  }

  handleParticipantJoined = async (participant: any) => {
    console.log('handleParticipantJoined', participant);
    const data = await this.getParticipants();
  }

  handleVideoConferenceJoined = async (participant: any) => {
    console.log('handleVideoConferenceJoined', participant);
    const data = await this.getParticipants();
  }

  handleVideoConferenceLeft = () => {
    console.log('handleVideoConferenceLeft');
    this.router.navigate(['/thank-you']);
  }

  handleMuteStatus = (audio: any) => {
    console.log('handleMuteStatus', audio); // { muted: true }
  }

  handleVideoStatus = (video: any) => {
    console.log('handleVideoStatus', video); // { muted: true }
  }

  getParticipants() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.api.getParticipantsInfo()); // get all participants
      }, 500);
    });
  }

}
