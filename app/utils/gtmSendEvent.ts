export enum GtmEvent {
  submit_contact_us = "submit_contact_us",
  submit_contact_us_header = "submit_contact_us_header",
  submit_talk_to_us = "submit_talk_to_us",
  submit_estimate_project = "submit_estimate_project",
  submit_free_consultation = "submit_free_consultation",
  submit_footer = "submit_footer",
  submit_email_banner = "submit_email_banner",
  submit_email_footer = "submit_email_footer",
}

export const gtmSendEvent = (event: GtmEvent, email: string) => {
  window?.dataLayer.push({
    event: event,
    email,
  });
};
