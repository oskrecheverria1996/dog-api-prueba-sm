import { Injectable } from "@angular/core";
// import { ToastrService } from "ngx-toastr";

@Injectable({ providedIn: "root" })
export class NotificationsService {
    constructor(
        // private toastr: ToastrService
    ) { }

    showToast(type, message?, title?: string, position?: string) {

        let alert = "";
        switch (type) {
            case "error":
                alert = "alert-danger";
                this.error(message, title)
                break;
            case "warning":
                alert = "alert-danger";
                this.warning(message, title)
                break;
        }
    }

    error(message: any, title?: string, position?: string) {
        // this.toastr.error(message, title,
        //     {
        //         timeOut: 5000,
        //         closeButton: true,
        //         enableHtml: true,
        //         tapToDismiss: true,
        //         easeTime:100,
        //         titleClass: "alert-title",
        //         positionClass: `toast-top-right`,
        //         toastClass:
        //             "ngx-toastr alert-dismissible error alert-notify",
        //     }
        // );
    };

    warning(message: any, title?: string, position?: string) {
        // this.toastr.warning(message, title,
        //     {
        //         timeOut: 5000,
        //         closeButton: true,
        //         enableHtml: true,
        //         tapToDismiss: true,
        //         easeTime:100,
        //         titleClass: "alert-title",
        //         positionClass: `toast-top-right`,
        //         toastClass:
        //             "ngx-toastr alert-dismissible warning alert-notify",
        //     }
        // );
    };
}