(function($R) {
  $R.add("plugin", "customButton", {
    modals: {
      customButton:
        '<form action="">' +
        '<div class="form-item">' +
        '<label for="customButton-link-url">URL <span class="req">*</span></label>' +
        '<input type="text" id="customButton-link-url" name="url" required></input>' +
        "</div>" +
        '<div class="form-item">' +
        '<label for="customButton-link-text">Text </label>' +
        '<input type="text" id="customButton-link-text" name="text"></input>' +
        "</div>" +
        "</form>",
    },

    // messages
    onmodal: {
      customButton: {
        opened: function($modal, $form) {
          let selectedText = this.selection.getText();

          $form.getField("url").focus();
          $form.setData({ text: selectedText });
        },
        insert: function($modal, $form) {
          let data = $form.getData();
          this._insert(data);
        },
      },
    },

    translations: {
      en: {
        customButton: "Arrow Button",
      },
    },

    init: function(app) {
      this.app = app;
      this.lang = app.lang;
      this.toolbar = app.toolbar;
      this.selection = app.selection;
      this.insertion = app.insertion;
    },

    // public
    start: function() {
      //Define the button object
      let btnObj = {
        title: this.lang.get("customButton"),
        // api: 'plugin.customButton.toggle',
      };

      // Dropdown object (link)
      let dropdownData = {
        item1: {
          title: "Insert Link",
          api: "plugin.customButton.openModal",
        },
      };

      //Add the button to the toolbar
      this.$button = this.toolbar.addButton("customButton", btnObj);

      this.$button.setDropdown(dropdownData);
    },

    openModal: function() {
      let options = {
        title: this.lang.get("customButton"),
        width: "600px",
        name: "customButton",
        handle: "insert",
        commands: {
          insert: { title: this.lang.get("insert") },
          cancel: { title: this.lang.get("cancel") },
        },
      };

      this.app.api("module.modal.build", options);
    },

    // private
    _insert: function(formData) {
      // Close the modal
      this.app.api("module.modal.close");

      const attributeName = "redactor-name-" + formData.text;
      this.app.inline.format({
        tag: "a",
        class:
          "uppercase flex items-center custom-bg-color-lighter-gray rounded-full p-2 pr-6 my-4 font-semibold text-sm cursor-pointer",
        attr: { "redactor-name": attributeName },
      });
      const linkElement = document.querySelectorAll(
        `[redactor-name="${attributeName}"]`
      )[0];
      linkElement.href = formData.url;
      linkElement.innerHTML = `<img src="/images/global/arrow_black.svg" class="mr-4"> ${formData.text}`;
    },
  });
})(Redactor);
