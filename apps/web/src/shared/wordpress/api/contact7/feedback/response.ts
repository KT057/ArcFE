type INVALID_FIELD = {
  error_id: string;
  field: string;
  idref: string | null;
  message: string;
};

export type WPContact7FeedbackResponse = {
  contact_form_id: number;
  into: string;
  invalid_fields: INVALID_FIELD[];
  message: string;
  posted_data_hash: string;
  status: "mail_sent" | "validation_failed" | "failed";
};
