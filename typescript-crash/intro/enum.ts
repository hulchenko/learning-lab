enum Membership {
  Simple,
  Standard,
  Premium,
}

const membership = Membership.Standard;
const membershipReverse = Membership[2];
console.log(membership); //1
console.log(membershipReverse); //Premium

// ---

enum SocialMedia {
  Facebook = 'FACEBOOK',
  Instagram = 'INSTAGRAM',
  YouTube = 'YOUTUBE',
}

const social = SocialMedia.Instagram;
console.log(social); //INSTAGRAM
