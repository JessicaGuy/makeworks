import { Controller } from "stimulus"
import Rails from "@rails/ujs";

export default class extends Controller {
  static targets = [ "role" ]

  connect() {
    //console.log(this.roleTarget.dataset)
  }

  updateRole(event){
    let data = new FormData()
    data.append("role", this.roleTarget.value)
    data.append("user", event.target.dataset.userid)

    Rails.ajax({
      type: "PATCH",
      url: this.data.get("url"),
      data: data,
      success: function(response){
        console.log(response)
      },
      error: function(err){
        console.log(err)
      }
    })
  }

  disconnect() {
    //console.log('disconnect')
  }
}
