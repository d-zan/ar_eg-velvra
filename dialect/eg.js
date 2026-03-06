const emojis = require('../../emojis');
const incorrect = emojis.emojis.incorrect;
const correct = emojis.emojis.correct;
const warning = emojis.emojis.warning;
const reason = emojis.emojis.reason;
const loading = emojis.emojis.loading;
//Reason: There are a same mean in all i but it>>>
const user_not_found = `**${incorrect} مش لاقي المستخدم ده في السيرفر.**`;

const failure = (text="فشلت")=> {
    return `**${incorrect} ${text}. اتاكد من صلاحيات, ان رتبتي اعلي من رتبة المستخدم ده. \n-# اذا المشكلة لم تحل, يرجاء التواصل مع الدعم.**`
}

module.exports = {
    test: "الكلام علي اي؟ - اللهجة المصريه",
    timeout: {
        userNotFound: user_not_found,
        invalidDuration: `**${warning} يرجاء كتابة صيغة مدة التيم اوت بشكل صحيح، مثل: \`1m/1d/1h\` **`,
        durationExceed: `**${warning} مدة التيم اوت لايمكن ان تزيد عن 28 يوم!**`, 
        success: {
            //`**${correct} تم وضع مهلة للمستخدم {{user}} لمدة {{duration}} بنجاح. ${reason} السبب: {{reason}}**`,    
            set: `**${correct} تم اضافة تيم اوت للمستخدم {{user}} لمدة {{duration}},\n ${reason} السبب: {{reason}}.**`,
            // `**${correct} تمت إزالة المهلة عن المستخدم {{user}} بنجاح. ${reason} السبب: {{reason}}**`
            remove:`**${correct} تم ازالة التيم اوت بنجاح من المستخدم {{user}} \n ${reason} السبب: {{reason}}**`,
        },
//`**${incorrect} فشل في إعطاء مهلة للمستخدم. هل لدي الصلاحيات الصحيحة؟ تأكد أن رتبتي أعلى من رتبة المستخدم.\n-# إذا استمرت المشكلة، يرجى التواصل مع الدعم.**`
        failure: failure("مقدرش ادي المستخدم تيم اوت"),
        
        cannotSelf: `**${warning} مينفعش تدي نفسك تيم اوت.**`,
        cannotBot: `**${warning} مينفعش تديني تيم اوت :).**`,
        //لا يمكنك إعطاء مهلة لعضو رتبته مساوية أو أعلى من رتبتك.
        cannotHigher: `**${warning} متقدرش تدي المستخدم ده تيم اوت, ممكن المستخدم ده رتبته اعلي من رتبتك او معاه نفس رتبتك.**`,
       // لا أستطيع إعطاء مهلة لهذا المستخدم. ربما رتبته أعلى مني أو لديه صلاحيات المدير.
        cannotModerate: `**${warning} مقدرش ادي المستخدم ده تيم اوت. رتبته اعلي من رتبتي او معاها ادمن.**`,
        //
        invalidAction: `**${incorrect} إجراء غير صالح. استخدم 'set' أو 'remove'.**`,
    },
    ban: {
        userNotFound: user_not_found,
        success: {
            give: `**${correct} المستخدم {{user}} خد بان بنجاح \n${reason} السبب: {{reason}}.**`,
//${emojis.emojis.correct} تم إلغاء حظر {{user}} بنجاح. ${emojis.emojis.reason} السبب: {{reason}}
            remove: `**${correct} تم فك البان من المستخدم {{user}} بنجاح, \n ${reason} السبب: {{reason}}.**`,
        },
        //فشل في حظر/إلغاء حظر المستخدم. هل لدي الصلاحيات الصحيحة؟ تأكد أن رتبتي أعلى من رتبة المستخدم.\n-# إذا استمرت المشكلة، يرجى التواصل مع الدعم.
        failure:failure("فشل اعطاء/فك البان من المستخدم"),
        cannotSelf: `**${warning} مش ينفع تدي نفسك بان...**`,
        cannotBot: `**${warning} جاري الحظر. لحظة ده انا! ليه بس كده :( تواصل مع الدعم للمساعده.**`,
        cannotHigher: `**${warning} متقدرش تدي بان لعضو اعلي من رتبتك او معاه نفس رتبتك.**`,
        cannotModerate: `**${warning} مقدرش ادي المستخدم ده بان. رتبته اعلي من رتبتي او معاه ادمن.**`,
        invalidAction: `**${incorrect} إجراء غير صالح. استخدم 'give' أو 'remove'.**`,
        alreadyBanned: `**${warning} واخد بان اصلا! لو عاوز تشيله استخدم "remove".**`,
    },
    kick: {
        userNotFound: user_not_found,
        //تم طرد {{user}} بنجاح. ${emojis.emojis.reason} السبب: {{reason}}
        kicked: `**${correct} تم طرد المستخدم {{user}} بنجاح. \n${reason} السبب: {{reason}}**`,
        error: failure("مقدرش اطرد العضو ده"),
        cannotSelf: `**${warning} مينفعش تطرد نفسك.**`,
        cannotBot: `**${warning} هي حصلت تطردني!**`,
        cannotHigher: `**${warning} متقدرش تطرد عضو رتبته اعلي منك او معا نفس رتبتك.**`,
        botCannotHigher: `**${warning} مقدرش اطرد عضو رتبته اعلي من رتبتي او معاه نفس رتبتي.**`,
        cannotModerate: `**${warning} مقدرش اطرد عضو رتبته اعلي من رتبتي او معاه ادمن.**`,
    },
    unban: {
        userNotFound: `**${incorrect} مش لاقي الـID في ليستت البان.**`,
        userNotBanned: `**${warning} المستخدم مش واخد بان.**`,
        unbanned: `**${correct} تم فك البان من المستخدم {{user}} بنجاح. \n${reason} السبب: {{reason}}**`,
        error: `**${incorrect} فشل في إلغاء حظر المستخدم. الخطأ: {{error}}**` //! Why the user will care about the err?
    },
    lock: {
        channelNotFound: `**${incorrect} مش لاقي الروم دي.**`,
        locked: `**${correct} تم إقفل {{channel}} بنجاح. \n${reason} السبب: {{reason}}**`,
        alreadyLocked: `**${warning} الروم دي مقفوله اصلا! **`,
        error: `**${incorrect} مقدرش اقفل الروم دي. أتاكد ان معايا الصلاحيات الازمة.\n-# إذا استمرت المشكلة، يرجى التواصل مع الدعم.**`,
        cannotLock: `**${warning} مقدرش اقفل الروم دي يرجاء التحقق من صلاحياتي.**`
    },
    unlock: {
        channelNotFound: `**${incorrect} مش لاقي الروم دي.**`,
        unlocked: `**${correct} تم فتح {{channel}} بنجاح. \n${reason} السبب: {{reason}}**`,
        notLocked: `**${warning} الروم مش مقفوله اصلا!**`,
        error: `**${incorrect} مقدرش افتح الروم دي. يرجاء التحقق من صلاحياتي.\n-# إذا استمرت المشكلة، يرجى التواصل مع الدعم.**`,
        cannotUnlock: `**${warning} مقدرش افتح الروم أتاكد من صلاحياتي.**`
    },
    avatar: {
        onlyInServer: `**${warning} تقدر تستخدم الامر ده في السيرفرات فقط!**`,
        noIcon: `**${warning} مفيش صوره للسيرفر ده!**`,
        noAvatar: `**${warning} المستخدم {{user}} مش عنده صوره شخصية.**`,
        avatar: `صورة الملف الشخصي لـ `,
        requestedBy: `تم الطلب بواسطة`,
        errorFetching: `**${warning} مقدرتش اجيب الصوره!**`, //عامة - لانه لايوجد شئ اقدر اعرف منه تقصد المستخدم ول السيرفر
        invalidUser: `**${warning} معرفش المستخدم.**`,
        type: `النوع:`,
        icon: `صورة السيرفر لـ `,
        avatarTypes: {
            static: `ثابتة (PNG)`,
            animated: `متحركة (GIF)`,
        },
        qualityDownload: {
            sd: `تحميل SD`,
            hd: `تحميل HD`,
            uhd: `تحميل 4K`,
        },
    },
    banner: {
        onlyInServer: `**${warning} تقدر تستخدام الامر في السيرفرات فقط!**`,
        noBanner: `**${warning} مفيش بنر للسيرفر ده!**`,
        banner: `بانر السيرفر لـ `,
        requestedBy: `تم الطلب بواسطة`,
        errorFetching: `**${warning} مقدرتش اجيب الصوره!**`,
        invalidUser: `**${warning} معرفش المستخدم ده.**`,
        type: `النوع:`,
        accentColor: `اللون:`,
        userBanner: `بانر `,
        global: `عام`,
        bannerTypes: {
            static: `ثابتة (PNG)`,
            animated: `متحركة (GIF)`,
        },
        qualityDownload: {
            sd: `تحميل SD`,
            hd: `تحميل HD`,
            uhd: `تحميل 4K`,
        }
    },
    // مشترك / عبارات شائعة
    common: {
        coins: `جنية`,
        captchaFailed: `**${warning} عملية انشاء صورة التحقق فشلت! حاول تاني.**`,
        captchaPrompt: `${loading} اكتب الاحرف الـ في الصوره دي. قدماك**{{seconds}} ثانية**.`,
        captchaIncorrect: `**${warning} رمز التحقق مش صح.**`,
        captchaTimeout: `**${warning} وقت التحقق خلص.**`,
        entered: `كتبت`,
        expected: `المفروض تكتب`,
        nothing: `مفيش`,
        noReason: `مفيش سبب.`,
        underDevelopment: `**${warning} الامر ده تحت التطوير.**`,
    },
    economy: {
        balance: {
            title: `بروفيل الاقتصادي لـ {{user}}`,
            wallet: `رصيد المحفظة`,
            bank: `رصيد البنك`,
            total: `إجمالي فلوسك`,
            transactions: `اخر حاجه عملتها`,
            noTransactions: `مفيش حاجه اتعملت اخر مره.`,
            requestedBy: `تم الطلب بواسطة`,
            cooldown: `المكافأة اليومية`,
            ready: `جاهزة للاستلام!`,
            notReady: `متاحة خلال {{time}}`,
        },
        buttons: {
            refresh: `تحديث`,
            transactions: `العمليات`,
            back: `رجوع`,
            daily: `استلام المكافأة`
        },
        transfer: {
            success: `تم التحويل بنجاح.`,
            recipient: `المستلم`,
            received: `تم الاستلام`,
            tax: `الضريبة (5%)`,
            totalSent: `إجمالي المرسل`,
            insufficient: `معكش فلوس كفايه.`,
            invalidAmount: `المبلغ غلط. دخل المبلغ صح, لازم اكبر من الـ0 و الكسور مش مسموح بيها.`,
            selfTransfer: `فشل التحويل: متقدرش تبعت لنفسك.`,
            botTransfer: `فشل التحويل: من امتي و البوتات عندها حسابات بنكية.`,
            accountTooNew: `تم حظر التحويل: حسابك لازم يكون معمول من شهر علي الاقل.`,
            recipientTooNew: `تم حظر التحويل: حساب المستلم لازم يكون معمول من شهر علي الاقل.`,
            insufficientBalance: `فشل التحويل: رصيدك غير كافي. \n رصيدك الحالي: **{{balance}}** جنية`,
            captchaRequired: `التحقق مطلوب لأنها التحويل.`,
            captchaChannel: `فشل التحويل: لازم يتم التحويل في روم المخصصه للكتابه في السيرفر.`,
            captchaFailed: `فشل التحويل: خطأ في انشاء صورة التحقق. حاول تاني.`,
            captchaTimeout: `تم إلغاء التحويل: وقتك خلص.`,
            captchaIncorrect: `تم إلغاء التحويل: رمز التحقق غلط.`,
            captchaHint: `تأكد من كتابة الـ6 حروف الـ في الصوره فقط.`,
            balanceChanged: `تم إلغاء التحويل: رصيدك اتغير خلال التحقق. \n رصيدك الحالي: **{{balance}}** عملة.`,
            reason: `السبب: {{reason}}`,
            // إشعار الرسائل الخاصة
            dmGreetings: [
                `تم ايداع مبلغ {{amount}} بنجاح في حسابك. المرسل كان: {{sender}}`,
                `تش-تشينج, تم استلام مبلغ {{amount}} بنجاح. بواسطة: {{sender}}`,
                `تم تحويل مبلغ وقدره {{amount}} من {{sender}}.`,
                `ارسل {{sender}} تحويل مالي بمبلغ {{amount}}.`
                /*
                `لقد استلمت تحويلًا واردًا بقيمة {{amount}} عملة فلفرا من {{sender}}`,
                `تشا-تشينغ! استلمت للتو {{amount}} عملة فلفرا من {{sender}}!`,
                `أخبار سارة! أرسل لك {{sender}} مبلغ {{amount}} عملة فلفرا.`,
                `تنبيه تحويل! قام {{sender}} بتحويل {{amount}} عملة فلفرا إليك.`
                */
            ],
            dmTransferType: `نوع التحويل: بدون`,
            dmReason: `السبب`,
        },
        daily: {
            verification: `التحقق من المكافأة اليومية`,
            alreadyClaimed: `استلمت المكافأه اليوميه اصلا. ارجع بعد **{{time}}**.`,
            success: `تم استلام المكافأة بنجاح.`,
            received: `حصلت على **{{amount}}** جنية.`,
            newBalance: `رصيدك الجديد: **{{balance}}** جنية.`,
            cancelledIncorrect: `تم إلغاء الاستلام: رمز التحقق غلط`,
            cancelledTimeout: `تم إلغاء الاستلام: وقت التحقق خلص.`,
        },
        reputation: {
            verification: `التحقق من السمعة`,
            cannotBot: `مينفعش تدي البوتات سمعة.`,
            cannotSelf: `مينفعش دي نفسك سمعة.`,
            alreadyGiven: `كفاية! اديت قبل كده. ارجع بعد **{{time}}**.`,
            success: `تم اعطاء **{{user}}** نقطة سمعة بنجاح. \n معاه دلوقتي **{{count}}** سمعة.`,
            cancelledIncorrect: `تم إلغاء السمعة: رمز التحقق غلط`,
            cancelledTimeout: `تم إلغاء السمعة: وقت التحقق خلص.`,
            // إشعار الرسائل الخاصة
            dmReceived: `استلمت نقطة سمعة من **{{sender}}**!`,
            dmTotal: `معاك **{{count}}** نقطة سمعة.`,
        }
    },
    giveaway: {
        verification: `التحقق من إجراء الجيفاوي`,
        verificationPrompt: `اكتب الأحرف في الصورة للمتابعة مع أمر **{{action}}**.`,
        verificationFailed: `فشل التحقق.`,
        verificationTimeout: `وقت التحقق خلص.`,
        captchaFailed: `فشل في إنشاء رمز التحقق الأمني. حاول مرة أخرى.`,
        error: `حدث خطأ أثناء تنفيذ أمر الجيفاوي.`,
        start: {
            //`صيغة المدة غير صحيحة. استخدم: 1d، 2h، 15m، 30s`
            invalidDuration:`صيغة المده غلط. استخدم: 30m او 1h او 40s.` ,
            embedTitle: `🎉 {{prize}}`,
            enterPrompt: `اضغط على زر 🎉 التحت للمشاركة!`,
            winners: `الكسبانين`,
            host: `صاحب الجيفاوي`,
            ends: `هيخلص`,
            enterButton: `شارك`,
            footer: `جيفاوي`,
            success: `تم بدء الجيفاوي في {{channel}}!`,
        },
        end: {
            notFound: `لم يتم العثور على الجيفاوي في هذا السيرفر.`,
            notRunning: `هذا الجيفاوي انتهت اصلا أو تم إلغاؤها.`,
            ended: `انتهاء الجيفاوي`,
            endedAnnouncement: `🎉 **انتهاء الجيفاوي!** الفائز(ون): {{winners}}`,
            noEntrants: `محدش شارك.`,
            none: `لا يوجد`,
            success: `تم إنهاء الجيفاوي بنجاح.`,
        },
        reroll: {
            notFound: `لم يتم العثور على الجيفاوي.`,
            notFinished: `يجب أن ينتهي الجيفاوي لإعادة الاختيار.`,
            announcement: `🔄 **إعادة اختيار!** الفائز(ون) الجدد لـ **{{prize}}**: {{winners}}`,
            //`لا يوجد مشاركون صالحون للاختيار منهم.`
            noEntrants: `مفيش مشاركين كويسين اختار منهم.`,
            success: `تم إعادة الاختيار للجيفاوي.`,
        },
        remove: {
            notFound: `مش لاقي الجيفاوي..`,
            //تم حذف هدية **{{prize}}** من قاعدة البيانات. 
            //تعليق: المستخدم ليس له علاقه ب قاعدة البيانات.... لذا لا حاجة لذكرها.
            success: `الجيفاوي **{{prize}}** حذف بنجاح.`,
        },
        list: {
            title:`الجيفاويات ال شغاله`,
            noActive: `مفيش جيفاويات في السيرفر.`,
        },
        enter: {
            alreadyEnded: `الجيفاوي خلص من زمان!`,
            alreadyEntered: `انت مشارك في الجيفاوي اصلا!`,
            success: `🎉 تم تسجيلك كـ مشارك في الجيفاوي.`,
        }
    },

    server: {
        helpMENUtitle: `قائمة مساعدة فلفرا`,
        helpMENUdesc: `اختر فئة أدناه لاستكشاف الأوامر.`,
        selectCATEGORY: `اختر فئة`,
        selectCOMMAND: `اختر أمرًا`,
        cmdNAME: `الأمر:`,
        noDescription: `مفيش وصف.`,
        usage: `الاستخدام`,
        category: `الفئة`,
        type: `النوع`,
        cooldown: `وقت الانتظار`,
        none: `مفيش`,
        userPerms: `صلاحيات المستخدم`,
        botPerms: `صلاحيات البوت`,
        aliases: `الاختصارت/الاسماء البديلة`,
        info: `المجموع: {{slash}} سلاش | {{prefix}} بريفكس`,
        slash: `سلاش`,
        prefix: `بريفكس`,
        push: `دفع`,
        and: `و`,
        unknown: `مجهول`,
        commandNotFOUND: `الأمر \`{{command}}\` مش موجود. `,
        serverINFO: `معلومات السيرفر`,
        serverName: `اسم السيرفر`,
        serverID: `ID السيرفر`,
        owner: `صاحب السيرفر`,
        memberCount: `الأعضاء`,
        creationDate: `تاريخ الإنشاء`,
        boostLevel: `لفل البوست`,
        boosts: `المستوى {{level}} ({{boostsCount}} بوستات)`,
        totalRoles: `الرتب`,
        totalChannels: `الرومات`,
        region: `المنطقة`,
        requestedBy: `تم الطلب بواسطة`,
        onlyInServer: `الامر ده ممكن تستخدمه في السيرفرات فقط.`
    },

    clear: {
        noTextChannel: `ممكن تستخدمه في الرومات الكتابة فقط.`,
        title: `ملخص الحذف`,
        channel: `الروم`,
        requested: `المطلوب`,
        filtered: `المصفى`,
        deleted: `المحذوف`,
        bulk: `جماعي`,
        singleOld: `فردي (قديم)`,
        errors: `أخطاء`,
        reason: `السبب: {{reason}}`,
        deletedNotice: `تم حذف {{count}} رسالة.`,
        noReason: `لم يتم تحديد سبب`,
    },

    warn: {
        guildRequired: `لازم تستخدمه في السيرفرات بس.`,
        userNotFound: user_not_found,
        cannotHigher: `مينفعش ادي المستخدم تحذير بسبب ترتيب الرتب.`,
        title: `تم تحذير المستخدم`,
        user: `المستخدم`,
        infractionId: `ID المخالفة`,
        activeWarnings: `التحذيرات النشطة`,
        reason: `السبب`,
        moderator: `المسؤول`,
        dmNotice: `استلمت تحذير. تم استلام من سيرفر **{{guild}}**. \n السبب: {{reason}} \n ID المخالفة: **{{id}}**.`,
        noReason: `محطش سبب.`,
    },

    warnings: {
        guildRequired: `لازم تستخدم الامر ده في سيرفر.`,
        title: `تحذيرات {{user}}`,
        noWarningsActive: `لا يوجد تحذيرات نشطة للمستخدم.`,
        noWarningsAll: `لم يتم العثور على تحذيرات (بما في ذلك غير النشطة).`,
        active: `نشط`,
        inactive: `غير نشط`,
        removed: `تمت الإزالة`,
        totalReturned: `الإجمالي المعروض`,
        includingInactive: `شامل غير النشطة`,
        yes: `نعم`,
        no: `لا`,
        requestedBy: `تم الطلب بواسطة {{user}}`,
    },

    warnRemove: {
        title: `تم إزالة التحذير`,
        notFound: `مش لاقي اي تحذير.`,
        alreadyInactive: `هذا التحذير غير نشط بالفعل.`,
        remainingActive: `الباقي النشط`,
        userId: `ID المستخدم`,
        removalReason: `سبب الإزالة`,
        noReason: `مفيش سبب لإزالة التحذير.`,
    },

    role: {
        onlyInServer: `بيشتغل في السيرفرات فقط.`,
        mustSpecifyRole: `يجب تحديد رتبه.`,
        userNotFound: user_not_found,
        alreadyHasRole: `المستخدم معاه الرتبة اصلا.`,
        doesNotHaveRole: `مش معاه الرتبة دي اصلا.`,
        giveSuccess: `تم إعطاء الرتبه {{role}} لـ {{user}} بنجاح. \n السبب: {{reason}}`,
        removeSuccess: `تم إزالة الرتبة {{role}} من {{user}} بنجاح.\n السبب: {{reason}}`,
        giveFail: `فشل في اعطاء الرتبة. شوف صلاحياتي و أتاكد منها, وأتاكد ان رتبتي اعلي من الرتبة ال هديها للمستخدم. \n-# لو المشكلة استمرت كلم الدعم.`,
        removeFail: `فشل في ازالة الرتبة. أتاكد من صلاحياتي, اتحقق اذا كانت رتبتي اعلي من الرتبه الـ انا هشيلها. \n-# لو المشكلة استمرت كلم الدعم.`,
        giveBotSuccess: `تم اضافة الرتبه {{role}} لـ {{success}} بوت بنجاح. \n فشل في اضافة الرتبه لـ {{fali}}. السبب: {{reason}}`,
        removeBotSuccess: `الرتبة {{role}} انشالت من {{success}} بوت بنجاح. \n فشل في ازالة {{fail}} السبب: {{reason}}`,
        giveAllSuccess: `اضافة للجميع. تم اضافة الرتبه {{role}} لـ {{success}} عضو بنجاح. \n فشل في {{fail}}, السبب: {{reason}}`,
        removeAllSuccess: `ازالة للجميع: الرتبه {{role}} انشالت من {{success}} بنجاح. \n فشل في {{fail}} السبب: {{reason}}`,        
        mustSpecifyTarget: `لازم تحدد مستخدم. و التطبيق علي البوتات ول الاعضاء.`,
        noReason: `مفيش سبب.`,
    },

    slowmode: {
        noTextChannel: `الروم لازم تكون من النوع النصي.`,
        invalidDuration: `صيغة المدة غلط. استخدم مثل: 10s، 5m، 2h، 1d، \n-# أو 0 للإلغاء.`,
        noChildChannels: `مش لاقي رومات كتابة فرعية في الكتجوري دي.`,
        title: `⏱ تم تحديث السلو-مود `,
        newRateLimit: `الفترة الجديد`,
        channelsUpdated: `الرومات المحدثة`,
        failed: `فشل`,
        errors: `أخطاء`,
        reason: `السبب: {{reason}}`,
        appliedToCategory: `تم التطبيق على الكتجوري: **{{name}}**`,
        channel: `الروم`,
        noReason: `مفيش سبب.`,
    },

    nickname: {
        userNotFound: user_not_found,
        cannotSelf: `مينفعش تغير اللقب بتاعك.`,
        cannotBot: `مينفعش تغير لقب البوت.`,
        cannotHigher: `مينفعش تغير اللقب لعضو اعلي من رتبتك او معاه نفس رتبتك`,
        cannotModerate: `مقدرش اغير لقب المستخدم ده. ممكن رتبته اعلي من رتبتي.`,
        successReset: `تم إعادة تعيين لقب {{user}} بنجاح.`,
        successSet: `تم تغيير لقب {{user}} إلى **{{nickname}}** بنجاح.`,
        error: `فشل في تغيير لقب {{user}}: {{error}}`,
    },

    disconnect: {
        no_reason: `محطش سبب.`,
        not_found: `مش لاقي العضو ده.`,
        not_in_voice: `العضو مش في الفويس.`,
        owner: `انت عاوزني اطرد الاونر من الفويس؟!`,
        higher_user: `مينفعش اطرد العضو ده من الفويس. رتبته اعلي من رتبتك او معاه نفس رتبتك.`,
        higher_bot: `مقدرش اطرد العضو ده من الفويس. رتبته اعلي من رتبتي.`,
        user_title: `تم طرد العضو من الفويس`,
        user_desc: `تم طرد العضو **{{user}}** من الفويس بنجاح.`,
        channel: `الروم`,
        moderator: `المسؤول`,
        reason: `السبب`,
        failed:  `فشل طرد العضو من الفويس: {error}`,
        invalid_channel: `الروم لازم تكون صوتيه.`,
        empty_channel: `الروم فاضيه.`,
        mass_title: `طرد الجميع`,
        mass_desc: `تم طرد جميع الاعضاء من **{channel}**.`,
        success: `تم طرد من الفويس.`,
    },

    addemoji: {
        invalidFileType: `نوع الملف في غلط. النوع المسموح بيه: {type}`,
        fileTooLarge: `حجم الملف كبير. \n الحد الاقصي للحجم: {max}KB`,
        invalidSource: `مش شغال الرابط ده او الايموجي ده. جرب مره تاني مع رابط او ايموجي شغالين.`,
        urlInvalidType: `ملف الـ بيشير له الرابط نوعه غير صحيح. النوع المسموح بيه: {type}.`,
        fileTooBigRemote: `حجم الملف كبير. \n الحد الاقصي للحجم: {max}KB`,
        mustProvideSource: `حِط رابط او ايموجي او ملف.`,
        emojiSuccessTitle: `تم إضافة الإيموجي`,
        emojiSuccessDesc: `تم إضافة {emoji} باسم **{name}**`,
        emojiFail: `فشل في إضافة الإيموجي: {error}`,
        //! What is the (tags) and why they add a unicode?
        //TODO: Return here>>.
        missingTags: `يجب توفير وسوم إيموجي يونيكود صالحة.`,
        //! End
        mustProvideSticker: `حِط رابط او ملف للستيكر.`,
        stickerSuccessTitle: `تم إضافة الاستيكر`,
        stickerSuccessDesc: `تم إضافة الاستيكر **{name}**`,
        stickerFail: `فشل في إضافة الاستيكر: {error}`,
    },
    leveling: {
        underDevelopment: `تحت التطوير`,
        quest: {
            authorTitle: `المهام اليومية لـ {{user}}`,
            title: `مهامك اليومية`,
            description: `**كمل التقدم و خليك الاول في قائمة المتصدرين!** \n كمل أنشطتك اليوميه واكسب **XP** وعملات`,
            messagesTitle: `الرسائل`,
            messagesGoal: `الهدف`,
            messagesReward: `المكافأة`,
            messagesProgress: `التقدم`,
            voiceTitle: `النشاط الصوتي`,
            voiceGoal: `الهدف`,
            voiceReward: `المكافأة`,
            voiceProgress: `التقدم`,
            footer: `مهام فلفرا`,
        }
    },

    backup: {
        error: `حدث خطأ غير متوقع أثناء معالجة أمر النسخ الاحتياطي. حاول مرة أخرى لاحقًا.`,
        create: {
            title: `تم إنشاء النسخة الاحتياطية بنجاح`,
            description: `تم إنشاء النسخة الاحتياطية لسيرفرك وهي جاهزة للاستعادة.`,
            backupId: `ID النسخة`,
            rolesCaptured: `الرتب المحفوظة`,
            channelsCaptured: `الرومات المحفوظة`,
            bansCaptured: `الحظر المحفوظ`,
            archiveSize: `حجم الأرشيف`,
            createdAt: `تاريخ الإنشاء`,
            createdBy: `تم الإنشاء بواسطة {{user}}`,
            failed: `فشلت عملية حفظ النسخة الاحتياطيه. حاول تاني بعدين.`,
        },
        info: {
            title: `معلومات النسخة الاحتياطية`,
            crossGuild: `النسخة موجوده بس تخص سيرفر تاني.`,
            notFound: `لم يتم العثور علي النسخه الاحتياطيه. يرجاء التأكد من الـID الخاص بالنسخه.`,
            rolesStored: `الرتب المخزنة`,
            channelsStored: `الرومات المخزنة`,
            bansStored: `الحظر المخزن`,
            createdBy: `أنشأها`,
            created: `تاريخ الإنشاء`,
        },
        list: {
            title: `نسخ السيرفر الاحتياطية`,
            noBackups: `مفيش نسخ احتياطيه للسيرفر ده. اصنع اول نسخه عن طريق امر \`/backup create\`.`,
            gettingStarted: `إنشاء نسخ احتياطية كل فترة يساعد في حماية إعدادات سيرفرك.`,
            description: `جميع النسخ الاحتياطيه لسيرفرك اهي: `,
            available: `النسخ المتوفره`,
        },
        load: {
            confirmRequired: `يجب تعيين \`confirm\` إلى \`true\` للمتابعة مع استعادة النسخة الاحتياطية.`,
            notFound: `مش لاق النسخه دي. يرجاء التحقق من الـID الخاص بالنسخه تاني.`,
            unavailable: `متقدرش تسترجع النسخه دي حالي. \n الحالة: {{status}}`,
            empty: `النسخه مفيش فيها حاجه!`, 
            crossGuildWarning:`النسخه دي تم انشاؤها في سيرفر تاني. فـ ممكن  بعض الاشياء لا يتم استعادتها بشكل مثالي.`,
            title: `استرجاع النسخة الاحتياطية`,
            instructions: `اختار ال انت عاوز تسترجعها من القايمة.`,
            selectPlaceholder: `اختر الأقسام لاسترجاعها (اختياري)`,
            continueBtn: `متابعة`,
            cancelBtn: `إلغاء`,
            canceled: `تم إلغاء عملية الاسترجاع.`,
            purgeChannels: `جاري حذف القنوات والكتجوري الحالية...`,
            purgeRoles: `جاري حذف الرتب الحالية...`,
            completedTitle: `اكتمل الاسترجاع بنجاح`,
            restoredComponents: `المكونات المسترجعة`,
            resultsSummary: `ملخص النتائج`,
            purgeSummary: `ملخص الحذف`,
            issues: `مشاكل واجهتنا`,
            noIssues: `كل حاجه خلصت من غير مشاكل.`,
            failed: `**عملية استرجاع النسخه فشلت**. في حاجه غلط حصلت, معلش جرب تاني او اتواصل مع المسؤول.`,
            //! what the cmdchannrl?
            //TODO: Return here>>>
            commandChannelContext: `سياق القناة`,
            commandChannelPreserved: `🛟 تم الاحتفاظ بقناة الأوامر للسماح بالردود على التفاعل.`,
            commandChannelNotPreserved: `لم يتم الاحتفاظ بقناة الأوامر.`
            //!Re

        },
        cancel: {
            noActive: `مفيش عمليات انشاء نسخ احتياطيه شغاله!`,
            success: `تم إلغاء إنشاء النسخة الاحتياطية (\`{{id}}\`).`,
        },
        delete: {
            notFound: `مش لاقي النسخه دي. اتاكد من الـID الخاص بالنسخه تاني.`,
            alreadyDeleted: `النسخه محذوفه اصلا.`,
            success: `تم حذف النسخة الاحتياطية (\`{{id}}\`).`,
        }
    }
      }
