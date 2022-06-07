import { Component, OnInit, Input } from "@angular/core";
import { SharedService } from "../../shared/services/shared.service";
import { ErrorMessage } from "../../shared/models/error-message.model";

@Component({
  selector: "app-error",
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.scss"],
})
export class ErrorComponent implements OnInit {
  error_status: number;
  error_title: string;
  error_body: string;

  Error: ErrorMessage = {
    status: 0,
    statusText: "No Error",
    message: "",
  };
  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.sharedMessage.subscribe(
      (message) => (this.Error = message)
    );
    this.error_status=this.Error.status;
    this.error_title = this.Error.statusText;
    this.error_body = this.Error.message;
  }
}
