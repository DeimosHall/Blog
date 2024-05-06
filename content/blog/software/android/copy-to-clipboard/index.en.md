---
title: "Copy to Clipboard using Jetpack Compose"
date: 2023-01-28T08:56:07-06:00
author: Francisco Torres
draft: false
section: "post"
cover: "https://lh3.googleusercontent.com/drive-viewer/AKGpihaTJc5kRf3hzWSN4IdkYm58uwgihgBrlMDHho5tMnzckUroHyIqJ-I-AWIZMTYsesW_sNiJZkx2aKHdXRpL-sPPHIPnFiWwdQ=s1600-rw-v1"
useRelativeCover: false
CoverCaption: ""
toc: false
showReadingTime: true
---

In this article we'll learn how to create a function for copying text to the clipboard. The method for managing context in the application is slightly different.

The app I'm using for this example is a password manager where I need to copy to clipboard the text from the text field. You can find the project on my Github at this link: https://github.com/DeimosHall/Glocker.git. **However, you can follow the steps in your own app**.

{{< image
src="https://drive.google.com/uc?id=1r0nk98DrPZfWTxH2l_RfL9dSGkZ3C4JK"
alt="General project"
style="width: auto; border-radius: 10px;" >}}

As you can see in the image, I'm using a function called `copyToClipboard` that receives two parameters, the context and text. Getting the text for copying depends on your own logic and it's quit easy, so let's see how to get the context.

## Getting the context

In the top of your app, you need to initialize the context using `LocalContext.current`. Once you have it, you can pass it as an argument to the views that need them. For example, my text field is within the `TopContent` module, so I pass the context as an argument.

{{< code language="kotlin" >}}
@Composable
fun MyApp() {
    val myOptions = getOptions(titles = listOf("Capital letters", "Numbers", "Symbols"))
    val mySlider = getSliderInfo()
    val myPassword = getPassword()
    val context = LocalContext.current

    Column {
        MyTitle()
        Box(modifier = Modifier.padding(25.dp)) {
            Column(
                modifier = Modifier.fillMaxSize(),
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.SpaceBetween
            ) {
                TopContent(options = myOptions, slider = mySlider, myPassword, context)
                GenerateButton(options = myOptions, slider = mySlider, myPassword)
            }
        }
    }
}
{{< /code >}}

The password field receives the context from the `MyApp()` module, so we send that context to the `copyToClipboard` function.

{{< code language="kotlin" >}}
@Composable
fun PasswordField(
    options: List<CheckboxInfo>,
    slider: SliderInfo,
    password: PasswordInfo,
    context: Context
) {
    Box(modifier = Modifier.padding(15.dp)) {
        OutlinedTextField(
            modifier = Modifier.fillMaxWidth(),
            value = password.value,
            onValueChange = {},
            placeholder = { Text(text = "Password") },
            shape = RoundedCornerShape(16.dp),
            enabled = false,
            trailingIcon = {
                IconButton(onClick = {
                    copyToClipboard(
                        context = context,
                        text = password.value
                    )
                }) {
                    Icon(
                        painter = painterResource(id = R.drawable.ic_content_copy_24),
                        contentDescription = "Copy icon"
                    )
                }
            }
        )
    }
}
{{< /code >}}

The copy function is as follows. Please note that the label "password" is because I'm copying a password, you should replace it with a label that describes what you're copying.

{{< code language="kotlin" >}}
fun copyToClipboard(context: Context, text: String) {
    val clipboardManager =
        context.getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
    val clip = ClipData.newPlainText("password", text)
    clipboardManager.setPrimaryClip(clip)
}
{{< /code >}}

If you have problems, make sure you're importing these libraries:

{{< code language="kotlin" >}}
import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
{{< /code >}}
